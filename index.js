// Footer AI button
const aiBtn = document.getElementById("ai-btn-footer");
const chatbot = document.getElementById("chatbot-container");
const backBtn = document.getElementById("chatbot-back");
const chatMessages = document.getElementById("chatbot-messages");
const chatInput = document.getElementById("chatbot-input");
const sendBtn = document.getElementById("chatbot-send");

// Chat history
let chatHistory = JSON.parse(localStorage.getItem("raazimChat")) || [];

function saveChat() {
    localStorage.setItem("raazimChat", JSON.stringify(chatHistory));
}

function renderMessages() {
    chatMessages.innerHTML = "";
    chatHistory.forEach(msg => {
        const div = document.createElement("div");
        div.classList.add("chatbot-msg", msg.sender === "user" ? "user-msg" : "ai-msg");
        div.textContent = msg.text;
        chatMessages.appendChild(div);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botResponse(text) {
    text = text.toLowerCase();
    if (text.includes("owner")) return "The owner is Cabdikariim Mohamoud.";
    if (text.includes("routes")) return "Check our routes section above! ⬆️";
    if (text.includes("services")) return "Visit our services section for details.";
    if (text.includes("book")) return "You can book via WhatsApp using the buttons above.";
    return "I'm here to help with anything about RAAZIM Bus!";
}

// Open/Close chatbot
aiBtn.addEventListener("click", () => { chatbot.style.display = "flex"; });
backBtn.addEventListener("click", () => { chatbot.style.display = "none"; });

// Send message
sendBtn.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if(!text) return;
    chatHistory.push({ sender:"user", text });
    chatHistory.push({ sender:"ai", text:botResponse(text) });
    renderMessages();
    saveChat();
    chatInput.value = "";
});

chatInput.addEventListener("keypress",(e)=>{if(e.key==="Enter")sendBtn.click();});

// Render on load
renderMessages();
