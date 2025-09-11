document.addEventListener("DOMContentLoaded", () => {
  // Map
  const openMapBtn = document.getElementById("open-map-btn");
  const closeMapBtn = document.getElementById("close-map-btn");
  const mapOverlay = document.getElementById("map-overlay");

  openMapBtn.addEventListener("click", () => mapOverlay.classList.remove("hidden"));
  closeMapBtn.addEventListener("click", () => mapOverlay.classList.add("hidden"));

  // AI Assistant
  const openAssistantBtn = document.getElementById("open-assistant-btn");
  const closeAssistantBtn = document.getElementById("close-assistant-btn");
  const assistantOverlay = document.getElementById("assistant-overlay");
  const chatBox = document.getElementById("chat-box");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");

  openAssistantBtn.addEventListener("click", () => assistantOverlay.classList.remove("hidden"));
  closeAssistantBtn.addEventListener("click", () => assistantOverlay.classList.add("hidden"));

  function appendMessage(text, className) {
    const msg = document.createElement("div");
    msg.classList.add("chat-message", className);
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function getAIResponse(message) {
    const lower = message.toLowerCase();
    if (lower.includes("owner")) return "👤 The owner of RAAZIM Bus is Abdikariim Mohamoud.";
    if (lower.includes("routes")) return "🚌 We operate routes from Borama, Hargeisa, and Burco.";
    if (lower.includes("wifi")) return "📶 Yes! Free WiFi is available on all buses.";
    if (lower.includes("contact")) return "📞 You can reach us at +252 63 776 2739 via WhatsApp.";
    return "🤖 I’m not sure about that, but I can help with routes, services, and booking info.";
  }

  sendBtn.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (!text) return;
    appendMessage(text, "user-message");
    chatInput.value = "";
    setTimeout(() => {
      const reply = getAIResponse(text);
      appendMessage(reply, "ai-message");
    }, 600);
  });

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });
});
