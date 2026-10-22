"""Storage helpers for the 3D Scene & Pose Editor.

Everything the browser produces (models, reference images, captures and saved
scenes) lives below ``ComfyUI/input/3d_scene_editor``.  Keeping the files in
the normal ComfyUI input tree means they are easy to back up and are also
visible to the regular image loader nodes.
"""

from __future__ import annotations

import base64
import hashlib
import json
import os
import re
import time
import uuid
from pathlib import Path
from typing import Any

try:  # ComfyUI is always available at runtime, but keep this importable for tests.
    import folder_paths  # type: ignore
except Exception:  # pragma: no cover - only used when running outside ComfyUI
    folder_paths = None


ROOT_NAME = "3d_scene_editor"
MAX_UPLOAD_BYTES = 512 * 1024 * 1024  # 512 MiB, plenty for a VRM / GLB
MAX_JSON_BYTES = 32 * 1024 * 1024
ALLOWED_ASSET_EXT = {
    ".glb", ".gltf", ".bin", ".vrm", ".png", ".jpg", ".jpeg", ".webp",
    ".ktx2", ".basis", ".dds", ".tga", ".bmp", ".gif", ".hdr", ".exr",
    ".mtl", ".obj", ".fbx", ".zip",
}
ALLOWED_IMAGE_EXT = {".png", ".jpg", ".jpeg", ".webp"}


def _input_root() -> Path:
    if folder_paths is not None:
        try:
            return Path(folder_paths.get_input_directory())
        except Exception:
            pass
    return Path.cwd() / "input"


DATA_ROOT = _input_root() / ROOT_NAME
ASSET_DIR = DATA_ROOT / "assets"
CAPTURE_DIR = DATA_ROOT / "captures"
SCENE_DIR = DATA_ROOT / "scenes"
THUMB_DIR = DATA_ROOT / "thumbs"


def ensure_dirs() -> None:
    for path in (DATA_ROOT, ASSET_DIR, CAPTURE_DIR, SCENE_DIR, THUMB_DIR):
        path.mkdir(parents=True, exist_ok=True)


def sanitize_name(name: str, fallback: str = "file") -> str:
    name = (name or "").strip().replace("\\", "/")
    name = name.rsplit("/", 1)[-1]
    name = re.sub(r"[\x00-\x1f<>:\"/\\|?*]+", "_", name)
    name = name.strip(" .")
    if not name:
        name = fallback
    if len(name) > 160:
        stem, ext = os.path.splitext(name)
        name = stem[: 150 - len(ext)] + ext
    return name


def is_safe_asset_name(name: str) -> bool:
    return (
        bool(name)
        and name == os.path.basename(name)
        and ".." not in name
        and not name.startswith(".")
    )


def asset_path(name: str) -> Path:
    if not is_safe_asset_name(name):
        raise ValueError("非法资源文件名")
    path = (ASSET_DIR / name).resolve()
    if ASSET_DIR.resolve() not in path.parents:
        raise ValueError("资源路径越界")
    return path


def asset_url(name: str) -> str:
    from urllib.parse import quote

    return f"/3d_editor/assets/{quote(name)}"


def capture_dir(token: str) -> Path:
    if not re.fullmatch(r"[A-Za-z0-9_-]{8,80}", token or ""):
        raise ValueError("非法截图令牌")
    path = (CAPTURE_DIR / token).resolve()
    if CAPTURE_DIR.resolve() not in path.parents:
        raise ValueError("截图路径越界")
    return path


def scene_path(name: str) -> Path:
    safe = sanitize_name(name, "scene")
    if not safe.lower().endswith(".json"):
        safe += ".json"
    path = (SCENE_DIR / safe).resolve()
    if SCENE_DIR.resolve() not in path.parents:
        raise ValueError("场景路径越界")
    return path


def new_token() -> str:
    return uuid.uuid4().hex


def write_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    text = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    tmp.write_text(text, encoding="utf-8")
    os.replace(tmp, path)


def read_json(path: Path, default: Any = None) -> Any:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return default


async def save_upload_stream_async(stream, name: str, kind: str = "asset") -> dict:
    """Save an aiohttp byte stream and return a small asset descriptor."""
    ensure_dirs()
    safe = sanitize_name(name)
    ext = os.path.splitext(safe)[1].lower()
    if ext and ext not in ALLOWED_ASSET_EXT:
        raise ValueError(f"不支持的模型/图片格式: {ext}")
    digest = hashlib.sha1()
    tmp = ASSET_DIR / f".upload_{uuid.uuid4().hex}.tmp"
    size = 0
    try:
        with tmp.open("wb") as handle:
            async for chunk in stream:
                if not chunk:
                    continue
                size += len(chunk)
                if size > MAX_UPLOAD_BYTES:
                    raise ValueError("文件超过 512MB 限制")
                digest.update(chunk)
                handle.write(chunk)
        sha = digest.hexdigest()
        final_name = f"{sha[:12]}_{safe}"
        final = asset_path(final_name)
        if not final.exists():
            os.replace(tmp, final)
        else:
            tmp.unlink(missing_ok=True)
    finally:
        tmp.unlink(missing_ok=True)
    return {
        "ok": True,
        "name": final_name,
        "url": asset_url(final_name),
        "size": size,
        "sha1": sha,
        "kind": kind,
    }


def decode_data_url(data_url: str) -> bytes:
    if not isinstance(data_url, str) or not data_url.startswith("data:"):
        raise ValueError("不是合法的 data URL")
    header, _, payload = data_url.partition(",")
    if ";base64" not in header:
        raise ValueError("只接受 base64 data URL")
    return base64.b64decode(payload)


def save_capture_image(folder: Path, name: str, data_url: str) -> str:
    data = decode_data_url(data_url)
    if len(data) > 80 * 1024 * 1024:
        raise ValueError("截图过大")
    safe = sanitize_name(name, "image") + ".png" if not name.endswith(".png") else sanitize_name(name)
    path = folder / safe
    tmp = folder / (safe + ".tmp")
    tmp.write_bytes(data)
    os.replace(tmp, path)
    return safe


def asset_local_path_from_url(url: str) -> Path | None:
    if not isinstance(url, str):
        return None
    marker = "/3d_editor/assets/"
    if marker not in url:
        return None
    name = url.split(marker, 1)[1].split("?", 1)[0].split("#", 1)[0]
    from urllib.parse import unquote

    name = unquote(name)
    if not is_safe_asset_name(name):
        return None
    path = asset_path(name)
    return path if path.exists() else None


def list_scenes() -> list[dict]:
    ensure_dirs()
    scenes = []
    for path in sorted(SCENE_DIR.glob("*.json"), key=lambda p: p.stat().st_mtime, reverse=True):
        data = read_json(path, {}) or {}
        scenes.append(
            {
                "name": path.stem,
                "file": path.name,
                "title": data.get("meta", {}).get("name") or path.stem,
                "updated": path.stat().st_mtime,
                "updated_text": time.strftime("%Y-%m-%d %H:%M", time.localtime(path.stat().st_mtime)),
                "size": path.stat().st_size,
            }
        )
    return scenes


def scene_summary(data: dict) -> dict:
    return {
        "version": data.get("version", 1),
        "name": data.get("meta", {}).get("name", "未命名场景"),
        "characters": len(data.get("characters", []) or []),
        "props": len(data.get("props", []) or []),
        "updated": time.time(),
    }
