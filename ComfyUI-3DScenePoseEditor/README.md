# 3D Scene & Pose Editor for ComfyUI

用 Three.js 在浏览器里摆人物、摆道具、调镜头，生成 3D 控制图、角色参考和场景参考，再交给 Qwen Image 2.1 出图。

## 安装

1. 解压后把整个 `ComfyUI-3DScenePoseEditor` 文件夹复制到：

```text
ComfyUI/custom_nodes/
```

2. 重启 ComfyUI，刷新浏览器。
3. 节点位置：

```text
3D / 场景与姿势 → 3D 场景与姿势编辑器
```

不需要 `pip install`；前端已经打包好，不需要 Node.js。

## 模型

插件不附带模型。工作流默认使用：

```text
models/diffusion_models/Qwen/Qwen21-noctQUncensoredRealismBuiltOn_v40Base_int8_convrot.safetensors
models/text_encoders/qwen3vl_8b_int8_convrot.safetensors
models/vae/qwen_image_2.1_vae_bf16.safetensors
models/loras/VNCCS_QI2_PoseStudioV1.1.safetensors
```

没有这些文件时，在 ComfyUI 的 Loader 节点里换成你自己的 Qwen 2.1 模型。

## 工作流

只提供一个工作流：

```text
workflows/3DScenePoseEditor-Demo.json
```

24 步、int8 文本编码、960×1280。直接拖进 ComfyUI 画布。

### 用法

1. 打开 Demo 工作流；
2. 双击节点上的「打开 3D 场景编辑器」；
3. 加人物、摆姿势、放道具、调镜头；
4. 在「参考」上传角色参考和场景参考；
5. 点「应用到节点」；
6. 回工作流点「运行」。

角色参考顺序：

```text
image1：3D 控制图
image2：第一个角色
image3：场景参考
image4 起：其余角色
```

## 显存不够时

默认只给质量优先的 24 步版本。显存不足时在 Demo 工作流里手动改两处：

- `ImageScale`：960×1280 → 832×1248；
- `VAEDecode`：换成 `VAEDecodeTiled`（tile 512，overlap 64）。

不要降 KSampler 步数，也不要把参考图分辨率降到 768 以下，否则双人身份会明显变差。

## 可选依赖

- `ComfyUI-EditUtils`：仅 `Qwen21RopeEncode` 实验节点需要；主工作流不依赖。
- `FVMtools + InsightFace`：仅两段式脸部重绘需要；主工作流不依赖。
- `LanPaint`：身体 masked 重绘需要；当前未集成。

## 目录

```text
ComfyUI-3DScenePoseEditor/
  __init__.py
  nodes.py
  image_utils.py
  routes.py
  storage.py
  requirements.txt
  web/
  workflows/
```

## 已知限制

- Qwen 2.1 没有“人物 A 只绑定参考 A”的区域条件；多人极端重叠时身体归属仍可能出错。
- 火柴人/人偶的方块手脚可能进入最终画面；正式出图建议用身体模式并保留清晰轮廓。
- 双人身份对参考分辨率敏感，建议 1024。
