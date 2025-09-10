const messages = document.getElementById("chatbot-messages");
const input = document.getElementById("chatbot-input");
const sendBtn = document.getElementById("chatbot-send");
const newBtn = document.getElementById("chatbot-new");

let chatHistory = JSON.parse(localStorage.getItem("raazimChat")) || [];

function saveChat() {
    localStorage.setItem("raazimChat", JSON.stringify(chatHistory));
}

function renderMessages() {
    messages.innerHTML = "";
    chatHistory.forEach(msg => {
        const div = document.createElement("div");
        div.classList.add("chatbot-msg", msg.sender === "user" ? "user-msg" : "ai-msg");
        div.textContent = msg.text;
        messages.appendChild(div);
    });
    messages.scrollTop = messages.scrollHeight;
}

function botResponse(text) {
    text = text.toLowerCase();
    if (text.includes("owner")) return "The owner is Cabdikariim Mohamoud.";
    if (text.includes("routes")) return "Check our routes section above! ⬆️";
    if (text.includes("services")) return "Visit our services section for details.";
    if (text.includes("book")) return "You can book via WhatsApp using the buttons above.";
    return "I'm here to help with anything about RAAZIM Bus!";
}

sendBtn.addEventListener("click", () => {
    const txt = input.value.trim();
    if (!txt) return;
    chatHistory.push({ sender: "user", text: txt });
    const reply = botResponse(txt);
    chatHistory.push({ sender: "ai", text: reply });
    renderMessages();
    saveChat();
    input.value = "";
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
});

newBtn.addEventListener("click", () => {
    chatHistory = [];
    saveChat();
    renderMessages();
});

renderMessages();
