// Função para mover o chatbot
const chatbot = document.getElementById('chatbot');
const header = document.getElementById('chat-header');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBody = document.getElementById('chat-body');
const closeBtn = document.getElementById('close-btn'); // Botão de fechar
const openChatbotBtn = document.getElementById('open-chatbot'); // Botão para abrir

// Simulação de respostas do chatbot
const responses = {
    "olá": "Olá! Como posso ajudar você hoje?",
    "ajuda": "Estou aqui para fornecer informações sobre as enchentes no Rio Grande do Sul.",
    "onde encontrar abrigo": "Você pode encontrar abrigos disponíveis nos Centros Comunitários da cidade.",
    "números de emergência": "Ligue para 193 para emergências. Para assistência local, consulte a Defesa Civil.",
    "previsão do tempo": "A previsão do tempo para a região é de chuvas moderadas nos próximos dias.",
};

// Função para enviar mensagem
function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user-message');
        userInput.value = '';

        // Resposta do chatbot
        const botResponse = responses[userMessage.toLowerCase()] || "Desculpe, não entendi sua pergunta. Tente outra vez.";
        addMessage(botResponse, 'bot-message');
    }
}

// Função para adicionar mensagem no chat
function addMessage(text, className) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message ${className}`;
    const message = document.createElement('p');
    message.innerText = text;

    messageContainer.appendChild(message);
    chatBody.appendChild(messageContainer);

    // Ajusta o scroll para a última mensagem
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Evento de clique no botão "Enviar"
sendBtn.addEventListener('click', sendMessage);

// Evento de pressionar "Enter" no campo de entrada
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Evento de clique no botão "Fechar"
closeBtn.addEventListener('click', function() {
    chatbot.style.display = 'none'; // Oculta o chatbot
});

// Evento de clique no botão "Abrir"
openChatbotBtn.addEventListener('click', function() {
    chatbot.style.display = 'flex'; // Mostra o chatbot
});

// Movimento do chatbot
header.addEventListener('mousedown', function(e) {
    let shiftX = e.clientX - chatbot.getBoundingClientRect().left;
    let shiftY = e.clientY - chatbot.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        chatbot.style.left = pageX - shiftX + 'px';
        chatbot.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    header.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        header.onmouseup = null;
    };
});

header.ondragstart = function() {
    return false;
};
