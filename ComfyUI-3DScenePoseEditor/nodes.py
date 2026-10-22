"""The ComfyUI node that exposes captured 3D scene control maps."""

from __future__ import annotations

import hashlib
import importlib.util
import json
import sys
from pathlib import Path

from . import image_utils, storage

try:  # ComfyUI core, already loaded in this installation
    from comfy_extras.nodes_qwen import TextEncodeQwenImage21 as _CoreQwen21Encode
except Exception:  # pragma: no cover - clear error at node execution time
    _CoreQwen21Encode = None

NODE_NAME = "Scene3DPoseEditor"
DISPLAY_NAME = "3D 场景与姿势编辑器"


class Scene3DPoseEditor:
    """Returns the browser-side 3D render, depth, pose, masks and references."""

    CATEGORY = "3D/场景与姿势"
    FUNCTION = "run"
    OUTPUT_NODE = False

    RETURN_TYPES = (
        "IMAGE",       # 1 scene render / blockout
        "IMAGE",       # 2 depth
        "IMAGE",       # 3 OpenPose skeleton
        "IMAGE",       # 4 color-coded semantic regions
        "MASK",        # 5 people mask
        "MASK",        # 6 props mask
        "IMAGE",       # 7 character appearance reference
        "IMAGE",       # 8 style reference
        "STRING",      # 9 positive prompt
        "STRING",      # 10 negative prompt
        "STRING",      # 11 scene JSON
        "STRING",      # 12 pose JSON (world-space joints)
        "INT",         # 13 effective output width
        "INT",         # 14 effective output height
        "IMAGE",       # 15 per-character reference batch for the multi-ref encoder
        "IMAGE",       # 16 per-character face/head crop batch
    )
    RETURN_NAMES = (
        "场景截图", "深度图", "姿势骨架", "区域色块",
        "人物遮罩", "道具遮罩", "角色参考拼图", "场景参考",
        "正向提示词", "负向提示词", "场景JSON", "姿势JSON",
        "输出宽度", "输出高度", "角色参考批次", "脸部参考批次",
    )

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "scene_data": (
                    "STRING",
                    {
                        "multiline": True,
                        "default": "{}",
                        "dynamicPrompts": False,
                        "tooltip": "由前端编辑器自动写入，请勿手动修改",
                    },
                ),
                "prompt": (
                    "STRING",
                    {
                        "multiline": True,
                        "default": "",
                        "dynamicPrompts": True,
                        "tooltip": "最终画面描述；留空时使用编辑器里保存的提示词",
                    },
                ),
                "negative_prompt": (
                    "STRING",
                    {
                        "multiline": True,
                        "default": "",
                        "dynamicPrompts": True,
                    },
                ),
                "width": ("INT", {"default": 960, "min": 64, "max": 4096, "step": 8}),
                "height": ("INT", {"default": 1280, "min": 64, "max": 4096, "step": 8}),
            }
        }

    @classmethod
    def IS_CHANGED(cls, scene_data, prompt, negative_prompt, width, height):
        digest = hashlib.sha1()
        digest.update(str(scene_data or "").encode("utf-8"))
        digest.update(b"\0")
        digest.update(str(prompt or "").encode("utf-8"))
        digest.update(b"\0")
        digest.update(str(negative_prompt or "").encode("utf-8"))
        try:
            data = json.loads(scene_data or "{}")
            token = (data.get("capture") or {}).get("token")
            if token:
                folder = storage.capture_dir(str(token))
                digest.update(str(token).encode())
                for path in sorted(folder.glob("*")):
                    if path.is_file():
                        digest.update(path.name.encode())
                        digest.update(str(path.stat().st_mtime_ns).encode())
        except Exception:
            pass
        return digest.hexdigest()

    def run(self, scene_data, prompt, negative_prompt, width, height):
        try:
            data = json.loads(scene_data or "{}")
        except json.JSONDecodeError:
            raise ValueError("3D 场景数据不是合法 JSON，请重新打开编辑器并应用。")
        if not isinstance(data, dict):
            data = {}

        manifest = image_utils.load_capture_manifest(data)
        out_w = int(manifest.get("width") or width or 1024)
        out_h = int(manifest.get("height") or height or 1365)
        out_w = max(8, out_w)
        out_h = max(8, out_h)

        scene = image_utils.load_capture_image(manifest, "scene", (out_w, out_h))
        depth = image_utils.load_capture_image(manifest, "depth", (out_w, out_h))
        pose = image_utils.load_capture_image(manifest, "pose", (out_w, out_h))
        region = image_utils.load_capture_image(manifest, "region", (out_w, out_h))
        people_mask = image_utils.load_capture_mask(manifest, "people_mask", (out_w, out_h))
        props_mask = image_utils.load_capture_mask(manifest, "props_mask", (out_w, out_h))

        style_path = image_utils.reference_image_path(data, "style")
        if style_path is None:
            raise ValueError(
                "缺少场景参考图（image2）。请打开 3D 编辑器，在「参考」里上传一张完整的场景/环境参考图，"
                "点「应用到节点」后再运行；最终场景会用它生成，白模只提供结构。"
            )
        char_ref = image_utils.character_reference_sheet(data, max_side=1024)
        if char_ref is None:
            char_ref = image_utils.placeholder_image(768, 768, (38, 40, 48))
        char_batch = image_utils.character_reference_batch(data)
        char_paths = image_utils.reference_image_paths(data, "character")
        face_batch = (
            image_utils.character_face_batch(data)
            if len(char_paths) == 1
            else image_utils.placeholder_image(512, 512, (38, 40, 48))
        )
        style_ref = image_utils.load_rgb(style_path, max_side=1024)

        effective_prompt = (prompt or "").strip() or str(manifest.get("prompt") or data.get("prompt") or "")
        effective_negative = (negative_prompt or "").strip() or str(
            manifest.get("negative_prompt") or data.get("negative_prompt") or ""
        )
        pose_json = str(manifest.get("pose_json") or data.get("pose_json") or "{}")
        compact_scene = json.dumps(data, ensure_ascii=False, separators=(",", ":"))

        return (
            scene,
            depth,
            pose,
            region,
            people_mask,
            props_mask,
            char_ref,
            style_ref,
            effective_prompt,
            effective_negative,
            compact_scene,
            pose_json,
            int(out_w),
            int(out_h),
            char_batch,
            face_batch,
        )


class Qwen21MultiRefEncode:
    """Native Qwen Image 2.1 encoding with per-character reference images.

    image_1 = 3D control, image_2 = first character, image_3 = scene reference,
    image_4.. = remaining characters, then per-character face close-ups.  This
    keeps the single-character layout unchanged while giving every additional
    person its own vision slot and VAE reference latent.
    """

    CATEGORY = "3D/场景与姿势"
    FUNCTION = "encode"
    RETURN_TYPES = ("CONDITIONING", "CONDITIONING", "LATENT")
    RETURN_NAMES = ("positive", "negative", "latent")

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "clip": ("CLIP",),
                "vae": ("VAE",),
                "prompt": ("STRING", {"multiline": True, "default": ""}),
                "negative_prompt": ("STRING", {"multiline": True, "default": ""}),
                "scene_image": ("IMAGE",),
                "character_images": ("IMAGE",),
                "face_images": ("IMAGE",),
                "scene_ref": ("IMAGE",),
                "resolution": ("INT", {"default": 1024, "min": 0, "max": 4096, "step": 32}),
            }
        }

    def encode(self, clip, vae, prompt, negative_prompt, scene_image, character_images, face_images, scene_ref, resolution=1024):
        if _CoreQwen21Encode is None:
            raise RuntimeError("当前 ComfyUI 没有 comfy_extras.nodes_qwen.TextEncodeQwenImage21，无法使用多角色参考编码。")
        images = {
            "image_1": scene_image,
            "image_3": scene_ref,
        }
        # The editor sends one batch frame per character, in left-to-right
        # order.  image_2 is the first character (backwards-compatible with the
        # single-character workflow); the rest become image_4, image_5...
        batch = character_images
        if batch is None:
            batch = scene_image[:0]
        count = min(int(batch.shape[0]), 14)
        if count > 0:
            images["image_2"] = batch[0:1]
        else:
            images["image_2"] = scene_image
        for index in range(1, count):
            images[f"image_{index + 3}"] = batch[index:index + 1]

        # Face close-ups follow all full-body references.  They are small,
        # high-detail crops and get their own vision slots, which is the whole
        # point: the text encoder no longer has to read a face from a full-body
        # 768x1024 reference.
        face_count = 0
        # Base-level face references help a single character, but in a
        # multi-character base pass they compete with the full-body references
        # and can collapse identities (both people drift to the first person).
        # Keep them for the single-character case; multi-character identity
        # needs a per-person head-detail/inpaint pass, not extra base slots.
        if face_images is not None and count == 1:
            face_start = 3 + count
            available = max(0, 17 - face_start)
            face_count = min(int(face_images.shape[0]), 1, available)
            for index in range(face_count):
                images[f"image_{face_start + index}"] = face_images[index:index + 1]
        if face_count:
            prompt = (prompt or "") + (
                " 另外提供的脸部特写参考按同样的人物顺序排列，专门用于眼睛、鼻子、嘴、脸型和发际线等五官细节；"
                "每张脸部特写属于前面同顺序的对应角色。"
            )
        output = _CoreQwen21Encode.execute(
            clip,
            prompt,
            negative_prompt,
            vae,
            resolution,
            images,
        )
        return output.result


_EDITUTILS_NODES = None


def _load_editutils_nodes():
    """Load the installed EditUtils node implementations on demand.

    The repository folder contains a hyphen, so it cannot be imported as a
    normal package.  Loading the file directly keeps our node self-contained
    and avoids adding another hard dependency at ComfyUI startup.
    """
    global _EDITUTILS_NODES
    if _EDITUTILS_NODES is not None:
        return _EDITUTILS_NODES
    candidates = [Path(__file__).resolve().parents[1] / "ComfyUI-EditUtils" / "nodes.py"]
    try:
        import folder_paths

        for root in folder_paths.get_folder_paths("custom_nodes"):
            candidates.append(Path(root) / "ComfyUI-EditUtils" / "nodes.py")
    except Exception:
        pass
    path = next((p for p in candidates if p.exists()), None)
    if path is None:
        raise RuntimeError(
            "未找到 ComfyUI-EditUtils。请把 ComfyUI-EditUtils 放到 custom_nodes 下，"
            "ROPE 空间控制需要它的 QwenImage 2.1 编码器和模型补丁。"
        )
    spec = importlib.util.spec_from_file_location("dsp_editutils_nodes", str(path))
    if spec is None or spec.loader is None:
        raise RuntimeError(f"无法加载 EditUtils: {path}")
    module = importlib.util.module_from_spec(spec)
    sys.modules["dsp_editutils_nodes"] = module
    spec.loader.exec_module(module)
    _EDITUTILS_NODES = module
    return module


def _align16(value) -> int:
    try:
        value = int(value)
    except Exception:
        value = 0
    return max(0, min(4096, value)) // 16 * 16


def _parse_offsets(raw, count: int):
    """Parse [[x,y], ...] and return one aligned offset per character."""
    data = []
    if isinstance(raw, str) and raw.strip():
        try:
            data = json.loads(raw)
        except Exception:
            data = []
    if not isinstance(data, list):
        data = []
    result = []
    for index in range(count):
        pair = data[index] if index < len(data) else (0, 0)
        if isinstance(pair, (list, tuple)) and len(pair) >= 2:
            result.append((_align16(pair[0]), _align16(pair[1])))
        else:
            result.append((0, 0))
    return result


class Qwen21RopeEncode:
    """Qwen 2.1 multi-reference encoder with per-character ROPE placement.

    Layout matches the editor prompt:
      image1 = 3D control, image2 = character 1, image3 = scene reference,
      image4... = remaining characters.

    Each character reference gets its own ``rope_x_offset / rope_y_offset``
    so it can be placed near its actual screen position instead of relying on
    prompt order alone.  The model patch from EditUtils is applied inside this
    node, so the downstream graph only needs model / positive / negative /
    latent.
    """

    CATEGORY = "3D/场景与姿势"
    FUNCTION = "encode"
    RETURN_TYPES = ("MODEL", "CONDITIONING", "CONDITIONING", "LATENT")
    RETURN_NAMES = ("model", "positive", "negative", "latent")

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "model": ("MODEL",),
                "clip": ("CLIP",),
                "vae": ("VAE",),
                "prompt": ("STRING", {"multiline": True, "default": ""}),
                "negative_prompt": ("STRING", {"multiline": True, "default": ""}),
                "scene_image": ("IMAGE",),
                "scene_ref": ("IMAGE",),
                "character_images": ("IMAGE",),
                "character_offsets": (
                    "STRING",
                    {
                        "multiline": True,
                        "default": "[[0, 0], [240, 0]]",
                        "tooltip": "每个角色一组 [x,y] ROPE 偏移（像素，自动对齐 16）。顺序与角色参考批次一致。",
                    },
                ),
                "ref_longest_edge": ("INT", {"default": 1024, "min": 256, "max": 2048, "step": 16}),
                "debug_log": ("BOOLEAN", {"default": False}),
            }
        }

    def _config(self, image, main, offset, ref_longest_edge):
        return {
            "image": image,
            "to_ref": True,
            "ref_main_image": bool(main),
            "ref_longest_edge": int(ref_longest_edge),
            "ref_crop": "pad",
            "ref_upscale": "lanczos",
            "to_vl": True,
            "ref_resize_mode": "longest_edge",
            "rope_x_offset": int(offset[0]),
            "rope_y_offset": int(offset[1]),
            "pad_mode": "color",
            "pad_color": "white",
            "pad_noise": 0.0,
        }

    def encode(
        self,
        model,
        clip,
        vae,
        prompt,
        negative_prompt,
        scene_image,
        scene_ref,
        character_images,
        character_offsets="[[0, 0], [240, 0]]",
        ref_longest_edge=1024,
        debug_log=False,
    ):
        edit = _load_editutils_nodes()
        # The editor sends one frame per character.  Keep the first frame as
        # image2 and put the scene reference on image3, exactly like the prompt.
        if character_images is None:
            character_images = scene_image[:0]
        count = min(int(character_images.shape[0]), 14)
        offsets = _parse_offsets(character_offsets, count)

        configs = []
        if scene_image is not None and int(scene_image.shape[0]) > 0:
            configs.append(self._config(scene_image[0:1], True, (0, 0), ref_longest_edge))
        if count > 0:
            configs.append(self._config(character_images[0:1], False, offsets[0], ref_longest_edge))
        if scene_ref is not None and int(scene_ref.shape[0]) > 0:
            configs.append(self._config(scene_ref[0:1], False, (0, 0), ref_longest_edge))
        for index in range(1, count):
            configs.append(self._config(character_images[index:index + 1], False, offsets[index], ref_longest_edge))
        if not configs:
            raise RuntimeError("Qwen21RopeEncode 至少需要一张参考图。")

        model_config = edit.QwenImage21ModelConfig_EditUtils().configure_model("")[0]
        encoder = edit.EditTextEncode_EditUtils()
        encoded = encoder.encode(
            clip=clip,
            vae=vae,
            prompt=prompt or "",
            model_config=model_config,
            configs=configs,
        )
        positive = encoded[0]
        latent = encoded[1]

        # CFG=1 in the editor workflow, so a true negative prompt is optional.
        # Zeroing the positive conditioning is cheap and avoids a second
        # text-encode pass through the reference images.
        try:
            import nodes as comfy_nodes  # ComfyUI root nodes.py (already loaded)
            negative = comfy_nodes.ConditioningZeroOut().zero_out(positive)[0]
        except Exception:
            negative = positive

        patched = edit.QwenImage21EditApply_EditUtils().apply_patch(model, bool(debug_log))[0]
        return (patched, positive, negative, latent)


NODE_CLASS_MAPPINGS = {
    NODE_NAME: Scene3DPoseEditor,
    "Qwen21MultiRefEncode": Qwen21MultiRefEncode,
    "Qwen21RopeEncode": Qwen21RopeEncode,
}
NODE_DISPLAY_NAME_MAPPINGS = {
    NODE_NAME: DISPLAY_NAME,
    "Qwen21MultiRefEncode": "Qwen 2.1 多角色参考编码",
}
