const aiModal = document.getElementById("ai-modal");
const openAiBtn = document.getElementById("open-ai-btn");
const closeAiBtn = document.getElementById("close-ai-btn");
const aiInput = document.getElementById("ai-input");
const aiSend = document.getElementById("ai-send");
const aiChat = document.getElementById("ai-chat");

// Extended hardcoded responses
const responses = [
  { keywords:["owner","who owns"], reply:"The owner is Cabdikariim Mohamoud." },
  { keywords:["raazim","bus"], reply:"RAAZIM Bus connects Borama, Hargeisa, and Burco." },
  { keywords:["wifi"], reply:"We offer free WiFi on all buses." },
  { keywords:["book","ticket"], reply:"You can book via WhatsApp using the Book Now button." },
  { keywords:["hi","hello"], reply:"Hello! How can I assist you today?" },
  { keywords:["bye","goodbye"], reply:"Goodbye! Safe travels!" },
  { keywords:["routes","where"], reply:"We have routes connecting Borama, Hargeisa, and Burco." },
  { keywords:["price","cost","fare"], reply:"Ticket prices depend on the route. Contact us via WhatsApp to book." },
  { keywords:["schedule","time"], reply:"Buses depart throughout the day. Check WhatsApp for exact timings." },
  { keywords:["contact","phone"], reply:"Call or WhatsApp us at +252 63 776 2739." },
  { keywords:["help","support"], reply:"I am here to assist you with information about our buses and services." },
];

// Open/Close AI Modal
openAiBtn.addEventListener("click",()=>{ aiModal.classList.remove("hidden"); aiInput.focus(); });
closeAiBtn.addEventListener("click",()=>{ aiModal.classList.add("hidden"); });

// Send message
function sendMessage(){
  const message = aiInput.value.trim();
  if(!message) return;
  appendMessage(message,"user");
  aiInput.value="";
  setTimeout(()=>{
    const reply = getReply(message);
    appendMessage(reply,"ai");
  },700);
}

aiSend.addEventListener("click",sendMessage);
aiInput.addEventListener("keypress",(e)=>{ if(e.key==="Enter") sendMessage(); });

function appendMessage(text,sender){
  const div = document.createElement("div");
  div.textContent=text;
  div.style.padding="10px";
  div.style.borderRadius="8px";
  div.style.maxWidth="80%";
  div.style.margin="5px 0";
  div.style.alignSelf=sender==="user"?"flex-end":"flex-start";
  if(sender==="user"){ div.style.background="#00d4ff"; div.style.color="#000"; }
  else{ div.style.background="#004080"; div.style.color="#fff"; }
  aiChat.appendChild(div);
  aiChat.scrollTop = aiChat.scrollHeight;
}

function getReply(message){
  message=message.toLowerCase();
  for(let r of responses){
    for(let key of r.keywords){
      if(message.includes(key)) return r.reply;
    }
  }
  return "Sorry, I don't have an answer for that yet. Please ask about RAAZIM Bus!";
}
