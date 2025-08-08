const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Predefined bot responses
const botResponses = {
    "¿Qué es la Cultura de Paz?": "Es un conjunto de valores y acciones que promueven la convivencia pacífica, el diálogo, y el respeto a los derechos humanos",
    "¿Quién promueve la Cultura de Paz?": "La UNESCO, gobiernos, escuelas, y organizaciones sociales la promueven globalmente.",
    "¿Cómo contribuyo a la paz?": "Respetando diferencias, escuchando a otros, y resolviendo conflictos sin violencia.",
    "¿Qué es el Día Internacional de la Paz?": "Se celebra el 21 de septiembre para fomentar la no violencia y alto al fuego mundial.",
    "¿La paz es solo ausencia de guerra?": "No, también es justicia social, igualdad, y oportunidades para todos.",
    "¿Qué son los Objetivos de Desarrollo Sostenible (ODS)?": "Metas de la ONU, como el ODS 16, que busca Paz, justicia e instituciones sólidas",
    "¿Cómo educar para la paz?": "Enseñando empatía, tolerancia, y resolución pacífica de conflictos desde la infancia.",
    "¿Qué papel tienen los medios en la paz?": "Deben informar con ética, evitar discursos de odio, y promover historias de reconciliación.",
    "¿Qué es la no violencia activa?": "Un método de lucha (como marchas o huelgas) que rechaza la agresión física.",
    "¿Ejemplo de líder pacifista?": "Mahatma Gandhi, quien liberó India con resistencia pacífica.",
    "¿Qué es mediación de conflictos?": "Un proceso donde un tercero neutral ayuda a encontrar soluciones dialogadas.",
    "¿La paz empieza en casa?": "Sí, con comunicación respetuosa y manejo de emociones en la familia.",
    "¿Cómo afecta la desigualdad a la paz?": "La pobreza y exclusión generan tensiones; reducir brechas construye paz duradera.",
    "¿Qué es la justicia restaurativa?": "Reparar daños mediante diálogo entre víctimas y ofensores, no solo castigos.",
    "¿La paz cuesta dinero?": "No, pero invertir en educación, salud, y empleo previene conflictos.",
    "¿Qué es el buen trato?": "Relaciones basadas en respeto, dignidad, y cuidado mutuo (opuesto a maltrato).",
    "¿Cómo ser pacífico en redes sociales?": "Evitar discursos de odio, fake news, y bloquear a quienes incitan violencia.",
    "¿Qué es la Carta de la Tierra?": "Un documento internacional que promueve sostenibilidad y paz global.",
    "¿La paz es solo para países en guerra?": "No, todos debemos practicarla diariamente en comunidades y relaciones.",
    "¿Frase célebre sobre paz?": "No hay camino para la paz, la paz es el camino -Gandhi.",
    "chicken jockey":"you kidding right?"
    
};

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Display user message
    appendMessage(message, 'user-message');

    // Bot response logic
    let botReply = "Lo siento, no entiendo tu pregunta. ¿Podrías intentar con otra frase?";
    for (const key in botResponses) {
        if (message.toLowerCase().includes(key.toLowerCase())) {
            botReply = botResponses[key];
            break;
        }
    }

    // Simulate a slight delay for "bot thinking"
    setTimeout(() => {
        appendMessage(botReply, 'bot-message');
    }, 500);

    userInput.value = ''; // Clear input
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

function appendMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(className);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
}

// Allow pressing 'Enter' to send
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});