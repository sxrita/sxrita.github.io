document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const messageContainer = document.getElementById('message-container');
    const progressiveMessage = document.getElementById('progressive-message');
    const loveMessage = document.getElementById('love-message');
    const fireworksContainer = document.getElementById('fireworks-container');

    const message = "Hola mi princesita Sara. He dedicado un tiempo especial para diseñar este mensaje porque realmente eres una persona muy especial para mí, y mereces todo mi tiempo y atención, incluso cuando no estamos juntos. Me siento increíblemente afortunado de haber encontrado a alguien como tú, una mujer tan única y extraordinaria. Tu manera de expresarte, tus cualidades y cómo me haces sentir son inigualables. Eres exactamente la mujer con la que siempre he soñado, y eso me llena de una inmensa ilusión. No puedo esperar para verte. Mi corazón y mi mente te anhelan y desean tenerte cerca. Estoy convencido de que el destino nos dará la oportunidad de conocernos aún mejor, y aunque eso tome tiempo, estoy completamente dispuesto a esperarte. Eres la mujer con la que he estado soñando y visualizando un futuro juntos, y me imagino nuestro camino lleno de felicidad y complicidad. Para mí, eres el complemento perfecto y mi mayor motivación para seguir adelante. Además, quiero que sepas que para mí eres una mujer hermosa, tanto por dentro como lo son tus sentimientos, tu humildad, honestidad, carisma, fidelidad, y algo muy característico de ti como lo es tu nobleza, y también hay que mirar por fuera. Ya que tu belleza ilumina cualquier lugar en el que estés, y tu presencia tiene un efecto mágico en mi vida. Cada vez que pienso en ti, me doy cuenta de cuán afortunado soy de conocerte y de poder compartir cada momento contigo. Eres una joya rara y preciosa, y amada en todo momento. Y yo me encargaré de hacerte sentir como tal. te amo mucho mi Sarita preciosa.";

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'Sara' && password === 'Saraymilo') {
            form.classList.add('hidden');
            errorMessage.textContent = '';
            messageContainer.style.display = 'block';
            typeMessage(message, progressiveMessage, () => {
                showFireworks();
                setTimeout(() => {
                    explodeBox();
                    setTimeout(() => {
                        loveMessage.style.display = 'block';
                    }, 1000);
                }, 2000);
            });
        } else {
            errorMessage.textContent = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
        }
    });

    function typeMessage(text, element, callback, index = 0) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeMessage(text, element, callback, index + 1), 100);
        } else {
            callback();
        }
    }

    function showFireworks() {
        // Puedes usar una biblioteca de fuegos artificiales aquí, o una simple animación
        const fireworks = document.createElement('div');
        fireworks.innerHTML = '<canvas id="fireworks" width="100%" height="100%"></canvas>';
        fireworksContainer.appendChild(fireworks);
        // Aquí podrías inicializar la biblioteca o añadir un efecto de fuegos artificiales manualmente
    }

    function explodeBox() {
        messageContainer.style.animation = 'explode 1s forwards';
        setTimeout(() => {
            messageContainer.style.display = 'none';
        }, 1000);
    }
});
