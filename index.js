const aiModal = document.getElementById("ai-modal");
const openAiBtn = document.getElementById("open-ai-btn");
const closeAiBtn = document.getElementById("close-ai-btn");
const aiChat = document.getElementById("ai-chat");
const aiInput = document.getElementById("ai-input");
const aiSend = document.getElementById("ai-send");

// Responses for the AI
const responses = [
  { keywords: ["owner", "who owns", "raazim owner"], reply: "The owner is Cabdikariim Mohamoud." },
  { keywords: ["bus", "raazim"], reply: "RAAZIM Bus operates between Borama, Hargeisa, and Burco." },
  { keywords: ["wifi"], reply: "Yes, we provide free WiFi on all trips." },
  { keywords: ["routes"], reply: "You can see our routes under the Routes section." },
];

// Open AI Modal
openAiBtn.addEventListener("click", () => {
  aiModal.classList.remove("hidden");
  aiInput.focus();
});

// Close AI Modal
closeAiBtn.addEventListener("click", () => {
  aiModal.classList.add("hidden");
});

// Send message
aiSend.addEventListener("click", () => {
  sendMessage();
});

aiInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = aiInput.value.trim();
  if (!message) return;

  appendMessage(message, "user-message");
  aiInput.value = "";

  setTimeout(() => {
    const reply = getReply(message);
    appendMessage(reply, "ai-message");
  }, 800);
}

function appendMessage(text, className) {
  const div = document.createElement("div");
  div.classList.add(className);
  div.textContent = text;
  aiChat.appendChild(div);
  aiChat.scrollTop = aiChat.scrollHeight;
}

function getReply(message) {
  message = message.toLowerCase();
  for (let res of responses) {
    for (let key of res.keywords) {
      if (message.includes(key)) return res.reply;
    }
  }
  return "I’m sorry, I don’t have that information right now.";
}
