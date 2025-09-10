// Get chatbot elements
const chatbotHeader = document.getElementById('chatbot-header');
const chatbotMessages = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Toggle chatbot open/close
chatbotHeader.addEventListener('click', () => {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.height = chatbot.style.height === '50px' ? '400px' : '50px';
    chatbotMessages.style.display = chatbotMessages.style.display === 'none' ? 'block' : 'none';
    document.getElementById('chatbot-input').style.display = document.getElementById('chatbot-input').style.display === 'none' ? 'flex' : 'none';
});

// Send message events
sendBtn.addEventListener('click', handleInput);
userInput.addEventListener('keypress', e => { 
    if (e.key === 'Enter') handleInput(); 
});

// Function to scroll to a section
function scrollToSection(id) {
    const section = document.getElementById(id);
    if(section){
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle user input
function handleInput() {
    const msg = userInput.value.trim().toLowerCase();
    if (!msg) return;

    if (msg.includes('routes') || msg.includes('route') || msg.includes('borama') || msg.includes('hargeisa') || msg.includes('burco')) {
        scrollToSection('routes');
    } else if (msg.includes('services') || msg.includes('wifi')) {
        scrollToSection('services');
    } else if (msg.includes('book') || msg.includes('ticket') || msg.includes('seat')) {
        window.open('https://wa.me/252637762739', '_blank');
    } else {
        // Default: suggest main actions
        alert('Try typing "routes", "services", or "book ticket" to navigate.');
    }

    // Clear input
    userInput.value = '';
}
