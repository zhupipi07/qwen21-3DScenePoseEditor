import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js";

const NODE_NAME = "Scene3DPoseEditor";
const EDITOR_VERSION = "20261018-1";
let activeEditor = null;

function getWidget(node, name) {
  return node.widgets?.find((widget) => widget.name === name);
}

function setWidget(node, name, value) {
  const widget = getWidget(node, name);
  if (!widget) return;
  widget.value = value;
  try {
    widget.callback?.(value);
  } catch (error) {
    console.warn("[3D Editor] widget callback failed", name, error);
  }
}

function uploadPreview(node, dataUrl) {
  if (!dataUrl) return;
  fetch(dataUrl)
    .then((response) => response.blob())
    .then(async (blob) => {
      const form = new FormData();
      form.append("image", blob, `dsp_${node.id}_${Date.now()}.png`);
      form.append("type", "temp");
      form.append("overwrite", "true");
      const response = await api.fetchApi("/upload/image", { method: "POST", body: form });
      if (!response.ok) return;
      const payload = await response.json();
      const url = `/view?filename=${encodeURIComponent(payload.name)}&subfolder=${encodeURIComponent(
        payload.subfolder || ""
      )}&type=${encodeURIComponent(payload.type || "temp")}&rand=${Math.random()}`;
      const image = new Image();
      image.src = url;
      image.onload = () => {
        node.imgs = [image];
        node.imageIndex = 0;
        node.setDirtyCanvas(true, true);
      };
      node.properties = node.properties || {};
      node.properties.dsp_preview_url = url;
      node.properties.dsp_applied_at = Date.now();
    })
    .catch((error) => console.warn("[3D Editor] preview upload failed", error));
}

function openEditor(node) {
  activeEditor?.();
  const overlay = document.createElement("dialog");
  overlay.style.cssText =
    "width:97vw;max-width:1780px;height:95vh;max-height:1180px;padding:0;border:1px solid #303848;" +
    "border-radius:14px;background:#0d0f14;box-shadow:0 30px 120px rgba(0,0,0,.7);overflow:hidden;";
  const frame = document.createElement("iframe");
  frame.title = "3D 场景与姿势编辑器";
  frame.style.cssText = "border:0;width:100%;height:100%;display:block;background:#0d0f14";
  const base = new URL("./editor/index.html", import.meta.url);
  base.searchParams.set("embedded", "1");
  base.searchParams.set("v", EDITOR_VERSION);
  frame.src = base.href;

  function close() {
    window.removeEventListener("message", receive);
    overlay.close();
    overlay.remove();
    activeEditor = null;
  }

  function sendLoad() {
    const payload = {
      node_id: node.id,
      node_title: node.title || "3D 场景与姿势编辑器",
      scene_data: getWidget(node, "scene_data")?.value || "{}",
      prompt: getWidget(node, "prompt")?.value || "",
      negative_prompt: getWidget(node, "negative_prompt")?.value || "",
      width: getWidget(node, "width")?.value || 960,
      height: getWidget(node, "height")?.value || 1280,
    };
    frame.contentWindow?.postMessage({ type: "dsp-load", payload }, location.origin);
  }

  function receive(event) {
    if (event.origin !== location.origin || event.source !== frame.contentWindow) return;
    const data = event.data || {};
    if (data.type === "dsp-ready") {
      sendLoad();
    } else if (data.type === "dsp-close") {
      close();
    } else if (data.type === "dsp-apply") {
      const payload = data;
      if (typeof payload.scene_data !== "string" || !payload.scene_data.trim()) {
        alert("编辑器没有返回场景数据，请重试。");
        return;
      }
      setWidget(node, "scene_data", payload.scene_data);
      if (typeof payload.prompt === "string") setWidget(node, "prompt", payload.prompt);
      if (typeof payload.negative_prompt === "string") setWidget(node, "negative_prompt", payload.negative_prompt);
      if (Number(payload.width) > 0) setWidget(node, "width", Math.round(Number(payload.width)));
      if (Number(payload.height) > 0) setWidget(node, "height", Math.round(Number(payload.height)));
      node.properties = node.properties || {};
      node.properties.dsp_capture_token = payload.capture_token || "";
      node.properties.dsp_scene_name = "3D 场景";
      node.setDirtyCanvas(true, true);
      app.graph?.change?.();
      if (payload.preview) uploadPreview(node, payload.preview);
      close();
      try {
        if (typeof app.extensionManager?.toast === "function") {
          app.extensionManager.toast({ severity: "success", summary: "3D 场景已应用", detail: "可以运行工作流了", life: 2600 });
        }
      } catch (error) {
        console.warn("[3D Editor] toast failed", error);
      }
    }
  }

  overlay.append(frame);
  overlay.addEventListener("cancel", (event) => {
    event.preventDefault();
    close();
  });
  window.addEventListener("message", receive);
  document.body.append(overlay);
  overlay.showModal();
  activeEditor = close;
}

app.registerExtension({
  name: "DeepSeek.Scene3DPoseEditor",
  async beforeRegisterNodeDef(nodeType, nodeData) {
    if (nodeData.name !== NODE_NAME) return;
    const onNodeCreated = nodeType.prototype.onNodeCreated;
    nodeType.prototype.onNodeCreated = function () {
      const result = onNodeCreated?.apply(this, arguments);
      const node = this;
      const sceneWidget = getWidget(node, "scene_data");
      if (sceneWidget) {
        sceneWidget.type = "dsp_hidden";
        sceneWidget.computeSize = () => [0, -4];
        if (sceneWidget.element) sceneWidget.element.style.display = "none";
        sceneWidget.serialize = true;
      }
      node.addWidget("button", "打开 3D 场景编辑器", null, () => openEditor(node), { serialize: false });
      const promptWidget = getWidget(node, "prompt");
      if (promptWidget) promptWidget.computeSize = (width) => [width, 96];
      const negWidget = getWidget(node, "negative_prompt");
      if (negWidget) negWidget.computeSize = (width) => [width, 52];
      node.size = [Math.max(node.size?.[0] || 360, 380), Math.max(node.size?.[1] || 420, 500)];
      node.title = "3D 场景与姿势编辑器";
      node.color = "#1b2433";
      node.bgcolor = "#101722";
      return result;
    };
    const getExtraMenuOptions = nodeType.prototype.getExtraMenuOptions;
    nodeType.prototype.getExtraMenuOptions = function (_, options) {
      const result = getExtraMenuOptions?.apply(this, arguments);
      options.push({
        content: "打开 3D 场景编辑器",
        callback: () => openEditor(this),
      });
      return result;
    };
    const onConfigure = nodeType.prototype.onConfigure;
    nodeType.prototype.onConfigure = function () {
      const result = onConfigure?.apply(this, arguments);
      const node = this;
      setTimeout(() => {
        const url = node.properties?.dsp_preview_url;
        if (!url || node.imgs?.length) return;
        const image = new Image();
        image.onload = () => {
          node.imgs = [image];
          node.imageIndex = 0;
          node.setDirtyCanvas(true, true);
        };
        image.src = url;
      }, 500);
      return result;
    };
  },
});
