const aiModal = document.getElementById("ai-modal");
const openAiBtn = document.getElementById("open-ai-btn");
const closeAiBtn = document.getElementById("close-ai-btn");
const aiInput = document.getElementById("ai-input");
const aiSend = document.getElementById("ai-send");
const aiChat = document.getElementById("ai-chat");

// Hardcoded responses
const responses = [
  { keywords: ["owner", "who owns"], reply: "The owner is Cabdikariim Mohamoud." },
  { keywords: ["raazim", "bus"], reply: "RAAZIM Bus connects Borama, Hargeisa, and Burco." },
  { keywords: ["wifi"], reply: "We offer free WiFi on all buses." },
  { keywords: ["book", "ticket"], reply: "You can book via WhatsApp using the Book Now button." },
  { keywords: ["hi", "hello"], reply: "Hello! How can I assist you today?" },
  { keywords: ["bye"], reply: "Goodbye! Safe travels!" }
];

// Show modal
openAiBtn.addEventListener("click", () => { aiModal.classList.remove("hidden"); aiInput.focus(); });

// Close modal
closeAiBtn.addEventListener("click", () => { aiModal.classList.add("hidden"); });

// Send message
function sendMessage() {
  const message = aiInput.value.trim();
  if(!message) return;
  appendMessage(message, 'user');
  aiInput.value = '';

  setTimeout(()=> {
    const reply = getReply(message);
    appendMessage(reply, 'ai');
  }, 800);
}

aiSend.addEventListener("click", sendMessage);
aiInput.addEventListener("keypress", (e)=> { if(e.key==="Enter") sendMessage(); });

function appendMessage(text, sender){
  const div = document.createElement("div");
  div.textContent = text;
  div.classList.add(sender==="user"?"user-msg":"ai-msg");
  div.style.margin="10px 0";
  div.style.padding="10px";
  div.style.borderRadius="8px";
  div.style.maxWidth="80%";
  if(sender==="user"){
    div.style.background="#00d4ff";
    div.style.color="#000";
    div.style.alignSelf="flex-end";
  } else {
    div.style.background="#004080";
    div.style.color="#fff";
    div.style.alignSelf="flex-start";
  }
  aiChat.appendChild(div);
  aiChat.scrollTop = aiChat.scrollHeight;
}

function getReply(message){
  message = message.toLowerCase();
  for(let r of responses){
    for(let key of r.keywords){
      if(message.includes(key)) return r.reply;
    }
  }
  return "Sorry, I don't have an answer for that yet.";
}
