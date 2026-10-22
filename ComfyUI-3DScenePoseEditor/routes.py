"""HTTP routes used by the 3D Scene & Pose Editor frontend.

The editor is a normal ComfyUI web extension.  Models, reference images and
captures are uploaded to these endpoints instead of being embedded in the
workflow JSON, which keeps node serialization small and makes scenes portable.
"""

from __future__ import annotations

import json
import re
import time

from aiohttp import web

from . import storage

try:
    from server import PromptServer  # type: ignore
except Exception:  # pragma: no cover
    PromptServer = None

VERSION = "1.0.0"
CAPTURE_KEYS = {
    "scene", "depth", "pose", "region", "people_mask", "props_mask",
    "ground_mask", "preview",
}
CAPTURE_PRUNE = 48


def _json(data, status=200):
    return web.json_response(data, status=status, dumps=lambda value: json.dumps(value, ensure_ascii=False))


def _error(message: str, status: int = 400):
    return _json({"ok": False, "error": message}, status=status)


def _safe_query_name(request: web.Request) -> str:
    return storage.sanitize_name(request.query.get("name", "asset"))


def _prune_captures() -> None:
    try:
        folders = [p for p in storage.CAPTURE_DIR.iterdir() if p.is_dir()]
        if len(folders) <= CAPTURE_PRUNE:
            return
        folders.sort(key=lambda p: p.stat().st_mtime, reverse=True)
        for folder in folders[CAPTURE_PRUNE:]:
            for child in folder.glob("*"):
                child.unlink(missing_ok=True)
            folder.rmdir()
    except Exception:
        pass


def register_routes() -> None:
    if PromptServer is None or getattr(PromptServer, "instance", None) is None:
        # Imported outside a running ComfyUI (unit tests / IDE).  The node
        # itself still works, only the browser routes are unavailable.
        return
    routes = PromptServer.instance.routes
    storage.ensure_dirs()

    @routes.get("/3d_editor/health")
    async def health(request: web.Request):
        return _json(
            {
                "ok": True,
                "version": VERSION,
                "root": str(storage.DATA_ROOT),
                "captures": len([p for p in storage.CAPTURE_DIR.iterdir() if p.is_dir()]),
                "scenes": len(list(storage.SCENE_DIR.glob("*.json"))),
            }
        )

    @routes.post("/3d_editor/upload")
    async def upload_asset(request: web.Request):
        try:
            name = _safe_query_name(request)
            kind = request.query.get("kind", "asset")
            if kind not in {"asset", "character", "prop", "scene", "character_ref", "style_ref"}:
                return _error("未知的上传类型")
            descriptor = await storage.save_upload_stream_async(
                request.content.iter_chunked(1024 * 1024), name, kind
            )
            return _json(descriptor)
        except ValueError as exc:
            return _error(str(exc), 413 if "512MB" in str(exc) else 400)
        except Exception as exc:  # pragma: no cover - defensive
            return _error(f"上传失败: {exc}", 500)

    @routes.get("/3d_editor/assets/{name}")
    async def get_asset(request: web.Request):
        try:
            name = request.match_info["name"]
            path = storage.asset_path(name)
        except ValueError:
            raise web.HTTPNotFound()
        if not path.exists() or not path.is_file():
            raise web.HTTPNotFound()
        headers = {"Cache-Control": "public, max-age=31536000, immutable"}
        return web.FileResponse(path, headers=headers)

    @routes.post("/3d_editor/capture")
    async def save_capture(request: web.Request):
        try:
            if request.content_length and request.content_length > storage.MAX_JSON_BYTES:
                return _error("截图数据过大", 413)
            payload = await request.json()
            token = str(payload.get("token") or "").strip()
            if not re.fullmatch(r"[A-Za-z0-9_-]{8,80}", token):
                return _error("截图令牌无效")
            images = payload.get("images") or {}
            if not isinstance(images, dict) or not images:
                return _error("没有收到截图")
            folder = storage.capture_dir(token)
            folder.mkdir(parents=True, exist_ok=True)
            files: dict[str, str] = {}
            for key, data_url in images.items():
                if key not in CAPTURE_KEYS or not isinstance(data_url, str):
                    continue
                file_name = storage.save_capture_image(folder, f"{key}.png", data_url)
                files[key] = file_name
            if "scene" not in files:
                return _error("缺少场景截图")
            manifest = {
                "ok": True,
                "version": 1,
                "token": token,
                "created": time.time(),
                "width": int(payload.get("width") or 0),
                "height": int(payload.get("height") or 0),
                "files": files,
                "prompt": str(payload.get("prompt") or ""),
                "negative_prompt": str(payload.get("negative_prompt") or ""),
                "camera": payload.get("camera") or {},
                "pose_json": payload.get("pose_json") or "",
                "scene": payload.get("scene") or {},
                "render_style": str(payload.get("render_style") or "clay"),
            }
            storage.write_json(folder / "manifest.json", manifest)
            _prune_captures()
            return _json(
                {
                    "ok": True,
                    "token": token,
                    "files": files,
                    "width": manifest["width"],
                    "height": manifest["height"],
                }
            )
        except ValueError as exc:
            return _error(str(exc))
        except json.JSONDecodeError:
            return _error("截图请求不是合法 JSON")
        except Exception as exc:  # pragma: no cover
            return _error(f"保存截图失败: {exc}", 500)

    @routes.get("/3d_editor/captures/{token}/{name}")
    async def get_capture_file(request: web.Request):
        try:
            folder = storage.capture_dir(request.match_info["token"])
        except ValueError:
            raise web.HTTPNotFound()
        name = storage.sanitize_name(request.match_info["name"])
        path = folder / name
        if not path.exists() or not path.is_file():
            raise web.HTTPNotFound()
        return web.FileResponse(path, headers={"Cache-Control": "no-store"})

    @routes.get("/3d_editor/scenes")
    async def list_scenes(request: web.Request):
        return _json({"ok": True, "scenes": storage.list_scenes()})

    @routes.post("/3d_editor/scenes")
    async def save_scene(request: web.Request):
        try:
            if request.content_length and request.content_length > storage.MAX_JSON_BYTES:
                return _error("场景文件过大", 413)
            payload = await request.json()
            data = payload.get("data") if isinstance(payload, dict) else None
            if not isinstance(data, dict):
                return _error("场景数据无效")
            name = str(payload.get("name") or data.get("meta", {}).get("name") or "scene")
            name = storage.sanitize_name(name, "scene")
            data.setdefault("meta", {})["name"] = name
            data["meta"]["savedAt"] = time.time()
            path = storage.scene_path(name)
            storage.write_json(path, data)
            return _json(
                {
                    "ok": True,
                    "name": path.stem,
                    "file": path.name,
                    "size": path.stat().st_size,
                }
            )
        except json.JSONDecodeError:
            return _error("场景请求不是合法 JSON")
        except Exception as exc:
            return _error(f"保存场景失败: {exc}", 500)

    @routes.get("/3d_editor/scenes/{name}")
    async def load_scene(request: web.Request):
        try:
            name = request.match_info["name"]
            path = storage.scene_path(name)
        except ValueError:
            raise web.HTTPNotFound()
        if not path.exists():
            raise web.HTTPNotFound()
        data = storage.read_json(path)
        if data is None:
            return _error("场景文件损坏", 500)
        return _json({"ok": True, "name": path.stem, "data": data})

    @routes.delete("/3d_editor/scenes/{name}")
    async def delete_scene(request: web.Request):
        try:
            path = storage.scene_path(request.match_info["name"])
        except ValueError:
            raise web.HTTPNotFound()
        if path.exists():
            path.unlink()
        return _json({"ok": True})

    @routes.get("/3d_editor/model-suggestions")
    async def model_suggestions(request: web.Request):
        """Small convenience endpoint for the docs panel in the editor."""
        return _json(
            {
                "ok": True,
                "unet": "Qwen\\qwen_image_2.1_int8_convrot.safetensors",
                "clip": "qwen3vl_8b_int8_convrot.safetensors",
                "vae": "qwen_image_2.1_vae_bf16.safetensors",
                "lora": "VNCCS_QI2_PoseStudioV1.1.safetensors",
            }
        )
