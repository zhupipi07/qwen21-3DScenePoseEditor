"""ComfyUI 3D Scene & Pose Editor.

A Three.js scene/pose blockout editor that feeds Qwen Image 2.1 (and other
image-edit models) with a strong structural reference.

Repository layout:
  web/                 served as a ComfyUI web extension
  web_src/             editor source (bundled by esbuild into web/editor)
  workflows/           ready-to-use Qwen Image 2.1 workflow
"""

from __future__ import annotations

from .nodes import NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS
from .routes import register_routes

register_routes()

WEB_DIRECTORY = "./web"
__version__ = "1.0.0"

__all__ = ["NODE_CLASS_MAPPINGS", "NODE_DISPLAY_NAME_MAPPINGS", "WEB_DIRECTORY", "__version__"]


def _log_ready():
    try:
        from . import storage
        storage.ensure_dirs()
        print(f"[3D Scene & Pose] 已加载，数据目录: {storage.DATA_ROOT}")
    except Exception as exc:  # pragma: no cover
        print(f"[3D Scene & Pose] 初始化提示: {exc}")


_log_ready()
