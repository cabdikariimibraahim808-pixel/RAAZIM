// --- AI Overlay ---
const aiOverlay = document.getElementById("ai-overlay");
const openAIBtn = document.getElementById("open-ai-btn");
const closeAIBtn = document.getElementById("close-ai-btn");

openAIBtn.addEventListener("click", () => aiOverlay.classList.remove("hidden"));
closeAIBtn.addEventListener("click", () => aiOverlay.classList.add("hidden"));

// --- Map Overlay ---
const mapOverlay = document.getElementById("map-overlay");
const openMapBtn = document.getElementById("open-map-btn");
const closeMapBtn = document.getElementById("close-map-btn");

openMapBtn.addEventListener("click", () => mapOverlay.classList.remove("hidden"));
closeMapBtn.addEventListener("click", () => mapOverlay.classList.add("hidden"));

// --- AI Chat ---
const aiChatBox = document.getElementById("ai-chat");
const aiInput = document.getElementById("ai-input");
const aiSend = document.getElementById("ai-send");

// Predefined Q&A
const aiResponses = [
  { keywords: ["owner"], reply: "The owner is Cabdikariim Mohamoud." },
  { keywords: ["hello", "hi"], reply: "Hello! Welcome to RAAZIM Bus AI Assistant." },
  { keywords: ["routes"], reply: "We serve Borama, Hargeisa, and Burco." },
  { keywords: ["booking"], reply: "You can book via WhatsApp using the buttons on the site." },
  { keywords: ["wifi"], reply: "All buses provide free WiFi onboard." },
  { keywords: ["map"], reply: "Check out our map section to find bus locations." },
];

function findResponse(message) {
  message = message.toLowerCase();
  for (let res of aiResponses) {
    for (let key of res.keywords) {
      if (message.includes(key)) return res.reply;
    }
  }
  return "Sorry, I don't have an answer for that. Please contact us directly.";
}

function appendAIMessage(text, className) {
  const msg = document.createElement("div");
  msg.classList.add("chat-message", className);
  msg.textContent = text;
  aiChatBox.appendChild(msg);
  aiChatBox.scrollTop = aiChatBox.scrollHeight;
}

aiSend.addEventListener("click", () => {
  const msg = aiInput.value.trim();
  if (!msg) return;
  appendAIMessage(msg, "user-message");
  aiInput.value = "";
  setTimeout(() => {
    const reply = findResponse(msg);
    appendAIMessage(reply, "ai-message");
  }, 800);
});

aiInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") aiSend.click();
});
