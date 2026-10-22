"""Image/manifest helpers for the 3D Scene & Pose Editor node."""

from __future__ import annotations

from pathlib import Path

import numpy as np
import torch
from PIL import Image, ImageDraw, ImageOps

from . import storage


def load_rgb(path: Path, max_side: int | None = None) -> torch.Tensor:
    with Image.open(path) as image:
        image = image.convert("RGB")
        if max_side and max(image.size) > max_side:
            image.thumbnail((max_side, max_side), Image.LANCZOS)
        array = np.asarray(image).astype(np.float32) / 255.0
    return torch.from_numpy(array)[None, ...]


def _load_mask(path: Path) -> torch.Tensor:
    with Image.open(path) as image:
        image = image.convert("L")
        array = np.asarray(image).astype(np.float32) / 255.0
    return torch.from_numpy(array)[None, ...]


def placeholder_image(width: int = 512, height: int = 512, color=(48, 50, 58)) -> torch.Tensor:
    width = max(8, int(width))
    height = max(8, int(height))
    array = np.zeros((height, width, 3), dtype=np.uint8)
    array[:, :] = color
    # A subtle diagonal pattern makes it obvious that no reference was set.
    step = max(24, min(width, height) // 12)
    for offset in range(-height, width, step * 2):
        for y in range(height):
            x = offset + y
            if 0 <= x < width:
                array[y, x] = (min(255, color[0] + 14), min(255, color[1] + 14), min(255, color[2] + 18))
    return torch.from_numpy(array.astype(np.float32) / 255.0)[None, ...]


def placeholder_mask(width: int = 512, height: int = 512, value: float = 0.0) -> torch.Tensor:
    return torch.full((1, max(8, int(height)), max(8, int(width))), float(value), dtype=torch.float32)


def reference_image_paths(scene_data: dict, group: str) -> list[Path]:
    """Return existing reference paths, primary first, without duplicates."""
    refs = (scene_data.get("references") or {}).get(group) or []
    ordered: list[Path] = []
    seen: set[str] = set()
    for ref in refs:
        if not isinstance(ref, dict):
            continue
        path = storage.asset_local_path_from_url(ref.get("url", ""))
        if path is None:
            continue
        key = str(path)
        if key in seen:
            continue
        seen.add(key)
        if ref.get("primary", True):
            ordered.insert(0, path)
        else:
            ordered.append(path)
    return ordered


def reference_image_path(scene_data: dict, group: str) -> Path | None:
    paths = reference_image_paths(scene_data, group)
    return paths[0] if paths else None


def character_reference_batch(scene_data: dict, width: int = 768, height: int = 1024) -> torch.Tensor:
    """Return one reference frame per character, stacked as an IMAGE batch.

    A batch frame is the input unit consumed by the custom multi-reference
    encoder; it is deliberately not a contact sheet, so the model can attend
    to each person separately.
    """
    paths = reference_image_paths(scene_data, "character")[:14]
    if not paths:
        return placeholder_image(width, height)
    if len(paths) == 1:
        return load_rgb(paths[0], max_side=max(width, height))

    frames = []
    for path in paths:
        canvas = Image.new("RGB", (width, height), (28, 30, 36))
        try:
            with Image.open(path) as source:
                image = source.convert("RGB")
                image = ImageOps.contain(image, (width - 8, height - 8), Image.Resampling.LANCZOS)
                canvas.paste(image, ((width - image.width) // 2, (height - image.height) // 2))
        except Exception:
            pass
        frames.append(np.asarray(canvas).astype(np.float32) / 255.0)
    return torch.from_numpy(np.stack(frames, axis=0))


_FACE_MODEL = None


def _get_face_model():
    global _FACE_MODEL
    if _FACE_MODEL is not None:
        return _FACE_MODEL
    try:
        from ultralytics import YOLO
    except Exception:
        return None
    roots = [
        Path(__file__).resolve().parents[2] / "models" / "yolo",
        Path(__file__).resolve().parents[1] / "models" / "yolo",
    ]
    try:
        import folder_paths

        roots.insert(0, Path(folder_paths.base_path) / "models" / "yolo")
        roots.insert(1, Path(folder_paths.models_dir) / "yolo")
    except Exception:
        pass
    for root in roots:
        for name in ("face_yolov8n.pt", "face_yolov8m.pt"):
            candidate = root / name
            if candidate.exists():
                try:
                    _FACE_MODEL = YOLO(str(candidate))
                    return _FACE_MODEL
                except Exception:
                    continue
    return None


def _face_crop(path: Path, size: int = 512) -> Image.Image | None:
    try:
        with Image.open(path) as source:
            image = source.convert("RGB")
    except Exception:
        return None
    width, height = image.size
    side = max(64, int(min(width, height) * 0.55))
    left = max(0, (width - side) // 2)
    top = max(0, int(height * 0.03))
    try:
        model = _get_face_model()
        if model is not None:
            results = model.predict(np.asarray(image), conf=0.25, verbose=False, device="cpu")
            boxes = results[0].boxes.xyxy.cpu().numpy() if results and results[0].boxes is not None else []
            if len(boxes):
                box = max(boxes, key=lambda b: float((b[2] - b[0]) * (b[3] - b[1])))
                x1, y1, x2, y2 = [float(v) for v in box[:4]]
                side = max(x2 - x1, y2 - y1) * 2.1
                cx, cy = (x1 + x2) / 2, (y1 + y2) / 2 - side * 0.08
                left = int(cx - side / 2)
                top = int(cy - side / 2)
                side = int(side)
    except Exception:
        pass
    side = max(32, min(side, width, height))
    left = max(0, min(left, width - side))
    top = max(0, min(top, height - side))
    crop = image.crop((left, top, left + side, top + side))
    canvas = Image.new("RGB", (size, size), (28, 30, 36))
    crop = ImageOps.contain(crop, (size - 8, size - 8), Image.Resampling.LANCZOS)
    canvas.paste(crop, ((size - crop.width) // 2, (size - crop.height) // 2))
    return canvas


def character_face_batch(scene_data: dict, size: int = 512) -> torch.Tensor:
    """One close-up face/head frame per character reference.

    Detection uses the local Ultralytics face model when available; a
    top-center fallback keeps the batch aligned with the character order.
    """
    paths = reference_image_paths(scene_data, "character")[:14]
    if not paths:
        return placeholder_image(size, size, (38, 40, 48))
    frames = []
    for path in paths:
        crop = _face_crop(path, size)
        if crop is None:
            crop = Image.new("RGB", (size, size), (28, 30, 36))
        frames.append(np.asarray(crop).astype(np.float32) / 255.0)
    return torch.from_numpy(np.stack(frames, axis=0))


def character_reference_sheet(scene_data: dict, max_side: int = 1024) -> torch.Tensor | None:
    """Compose all character references into one preview/contact sheet.

    The custom multi-reference encoder consumes the per-character batch;
    this sheet remains useful for the node preview and for older workflows.
    """
    paths = reference_image_paths(scene_data, "character")[:9]
    if not paths:
        return None
    if len(paths) == 1:
        return load_rgb(paths[0], max_side=max_side)

    cols = 2 if len(paths) <= 4 else 3
    rows = (len(paths) + cols - 1) // cols
    margin = 12
    gap = 12
    cell_w = max(120, (max_side - margin * 2 - gap * (cols - 1)) // cols)
    cell_h = max(160, int(cell_w * 4 / 3))
    sheet_w = margin * 2 + cell_w * cols + gap * (cols - 1)
    sheet_h = margin * 2 + cell_h * rows + gap * (rows - 1)
    sheet = Image.new("RGB", (sheet_w, sheet_h), (28, 30, 36))

    for index, path in enumerate(paths):
        try:
            with Image.open(path) as source:
                image = source.convert("RGB")
                image = ImageOps.contain(image, (cell_w - 6, cell_h - 6), Image.Resampling.LANCZOS)
        except Exception:
            continue
        col = index % cols
        row = index // cols
        x = margin + col * (cell_w + gap) + (cell_w - image.width) // 2
        y = margin + row * (cell_h + gap) + (cell_h - image.height) // 2
        # A subtle frame separates light characters from the dark sheet.
        draw = ImageDraw.Draw(sheet)
        draw.rectangle(
            [x - 2, y - 2, x + image.width + 1, y + image.height + 1],
            outline=(116, 122, 136),
            width=2,
        )
        sheet.paste(image, (x, y))

    array = np.asarray(sheet).astype(np.float32) / 255.0
    return torch.from_numpy(array)[None, ...]


def load_capture_manifest(scene_data: dict) -> dict:
    capture = scene_data.get("capture") or {}
    token = str(capture.get("token") or "").strip()
    if not token:
        raise ValueError(
            "这个节点还没有可用的 3D 截图。请双击/点击节点上的「打开 3D 场景编辑器」，"
            "摆好场景和人物后点击「应用到节点」再运行工作流。"
        )
    folder = storage.capture_dir(token)
    manifest_path = folder / "manifest.json"
    if not manifest_path.exists():
        raise ValueError(
            "找不到当前场景的截图缓存。请重新打开 3D 编辑器并点击「应用到节点」"
            "（可能是一次 ComfyUI 重启或清理后缓存被删除了）。"
        )
    manifest = storage.read_json(manifest_path, None)
    if not isinstance(manifest, dict):
        raise ValueError("截图缓存已损坏，请重新应用场景。")
    scene_in_manifest = manifest.get("scene") or {}
    if scene_in_manifest and scene_in_manifest.get("capture", {}).get("token") not in (None, token):
        raise ValueError("截图缓存与当前场景不匹配，请重新应用场景。")
    return manifest


def capture_path(manifest: dict, key: str) -> Path | None:
    files = manifest.get("files") or {}
    name = files.get(key)
    if not name:
        return None
    token = manifest.get("token")
    try:
        path = storage.capture_dir(str(token)) / storage.sanitize_name(name)
    except Exception:
        return None
    return path if path.exists() else None


def load_capture_image(manifest: dict, key: str, fallback_size: tuple[int, int]) -> torch.Tensor:
    path = capture_path(manifest, key)
    if path is not None:
        try:
            return load_rgb(path)
        except Exception:
            pass
    return placeholder_image(*fallback_size)


def load_capture_mask(manifest: dict, key: str, fallback_size: tuple[int, int]) -> torch.Tensor:
    path = capture_path(manifest, key)
    if path is not None:
        try:
            return _load_mask(path)
        except Exception:
            pass
    return placeholder_mask(*fallback_size)


def caption_overlay(text: str, width: int, height: int) -> torch.Tensor:
    """Small helper used only for diagnostics / tests."""
    image = Image.new("RGB", (width, height), (20, 22, 28))
    draw = ImageDraw.Draw(image)
    draw.text((12, 12), text, fill=(230, 230, 230))
    return torch.from_numpy(np.asarray(image).astype(np.float32) / 255.0)[None, ...]
