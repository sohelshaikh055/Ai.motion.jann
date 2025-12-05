let selectedModel = "animatediff";

function setModel(m) {
    selectedModel = m;
    alert("Selected: " + m);
}

async function generate() {
    const prompt = document.getElementById("prompt").value;
    const fileInput = document.getElementById("inputImage").files[0];

    if (!prompt) {
        alert("Please write a prompt");
        return;
    }

    document.getElementById("loading").style.display = "block";

    // HuggingFace free models
    let API_URL = {
        "animatediff": "https://api-inference.huggingface.co/models/guoyww/animatediff",
        "hunyuan": "https://api-inference.huggingface.co/models/tencent/HunyuanVideo",
        "opensora": "https://api-inference.huggingface.co/models/LanguageBind/Open-Sora-1.2"
    }[selectedModel];

    const formData = new FormData();
    formData.append("prompt", prompt);
    if (fileInput) formData.append("image", fileInput);

    const outputVideo = document.getElementById("outputVideo");

    try {
        const res = await fetch(API_URL, { method: "POST", body: formData });
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        outputVideo.src = url;
        document.getElementById("loading").style.display = "none";

    } catch (err) {
        alert("Error: " + err);
        document.getElementById("loading").style.display = "none";
    }
}
