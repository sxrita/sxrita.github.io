document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    
    form.addEventListener('keydown', function(event) {
        // Crear un nuevo contenedor para el SVG
        const div = document.createElement('div');
        div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px" baseProfile="basic"><path fill="#fff" d="M24.589,10.375c0.659-5.123-0.577-6.597-1.18-6.728c-1.958-0.427-4.771,1.565-5.897,2.411 c-0.913-0.195-1.862-0.31-2.838-0.31c-1.805,0-3.49,0.364-4.987,0.993C8.754,6.265,6.592,5.296,4.925,5.593 c-0.369,0.066-2.25,2.018-0.53,5.822c-0.656,1.235-1.03,2.602-1.03,4.043c0,5.319,4.446,8.154,11.621,8.155 c6.864,0.001,11.387-2.836,11.387-8.155C26.373,13.598,25.71,11.859,24.589,10.375z"/><path fill="#788b9c" d="M14.99,24.112c-0.002,0-0.003,0-0.004,0c-7.703-0.001-12.121-3.156-12.121-8.655 c0-1.401,0.328-2.766,0.976-4.061c-1.11-2.614-0.575-4.348-0.146-5.16c0.33-0.625,0.778-1.071,1.144-1.136 c1.661-0.302,3.688,0.512,4.869,1.092c2.37-0.947,4.957-1.207,7.687-0.67c2.566-1.894,4.625-2.692,6.122-2.363 c1.109,0.24,2.181,2.241,1.594,7.079c1.154,1.593,1.764,3.394,1.764,5.219c0,2.734-1.153,4.977-3.335,6.484 C21.481,23.361,18.526,24.112,14.99,24.112z M5.594,6.037c-0.2,0-0.395,0.015-0.581,0.048c-0.249,0.151-1.65,1.834-0.162,5.123 l0.101,0.224l-0.115,0.217c-0.645,1.213-0.971,2.494-0.971,3.809c0,4.864,4.054,7.654,11.121,7.655c0.001,0,0.003,0,0.004,0 c3.332,0,6.091-0.689,7.979-1.994c1.928-1.331,2.904-3.235,2.904-5.661c0-1.67-0.582-3.322-1.684-4.78l-0.122-0.163l0.025-0.202 c0.615-4.779-0.484-6.104-0.79-6.176c-1.198-0.253-3.148,0.563-5.49,2.321l-0.182,0.137l-0.223-0.047 c-2.691-0.573-5.223-0.311-7.528,0.655l-0.214,0.09L9.459,7.187C8.732,6.816,7.033,6.037,5.594,6.037z"/><path fill="#788b9c" d="M1.222,17.86l-0.236-0.973c2.612-0.633,4.358-0.56,4.431-0.555l-0.047,0.998	C5.354,17.331,3.68,17.265,1.222,17.86z"/><path fill="#788b9c" d="M2.697,20.447l-0.539-0.843c0.048-0.03,1.2-0.759,3.378-1.162l0.182,0.982	C3.751,19.79,2.708,20.44,2.697,20.447z"/><path fill="#788b9c" d="M3.965,23.333L3.23,22.655c0.037-0.041,0.951-1.02,3.654-2.371l0.447,0.895	C4.826,22.432,3.974,23.324,3.965,23.333z"/><path fill="#ffb5d2" d="M20.056,6.849c0,0-0.624-3.042-3.042-3.354c0,0-1.482-0.234-2.652,2.886 c0,0-0.936,2.886,0.936,3.744c0,0,1.248,0.468,3.588-0.702L20.056,6.849z"/><path fill="#ea4c89" d="M16.026,10.72c-0.533,0-0.838-0.102-0.904-0.127c-2.283-1.045-1.279-4.231-1.235-4.366 c1.283-3.426,3.008-3.255,3.205-3.226c2.727,0.352,3.425,3.608,3.454,3.747l0.032,0.159l-1.311,2.884L19.109,9.87 C17.735,10.558,16.699,10.72,16.026,10.72z M15.506,9.67c0.013,0.001,1.065,0.307,2.999-0.617l1.023-2.252 c-0.156-0.57-0.83-2.585-2.578-2.81c-0.01-0.002-1.132-0.068-2.12,2.565C14.83,6.56,14.063,9.009,15.506,9.67L15.506,9.67z"/><path fill="#ffb5d2" d="M21.538,7.629c0,0,2.574-1.248,3.744-0.234c1.17,1.014,0.858,2.574,0,3.822 c-0.576,0.838-1.404,1.482-2.34,1.404c-0.936-0.078-1.872-0.702-2.418-2.184L21.538,7.629z"/><path fill="#66798f" d="M23.091,13.126c-0.063,0-0.127-0.002-0.191-0.008c-0.74-0.062-2.094-0.47-2.845-2.509l-0.063-0.171 l1.146-3.171l0.184-0.089c0.294-0.142,2.91-1.355,4.288-0.162c1.225,1.061,1.257,2.779,0.085,4.483 C24.977,12.543,24.037,13.126,23.091,13.126z M21.058,10.431c0.425,1.037,1.088,1.621,1.926,1.691 c0.884,0.073,1.622-0.805,1.886-1.188c0.327-0.476,1.3-2.108,0.085-3.161c-0.684-0.594-2.293-0.086-3.018,0.225L21.058,10.431z"/><path fill="#788b9c" d="M24.732,15.357l-0.307-0.951c0.103-0.034,2.557-0.814,4.751-0.486l-0.146,0.988	C27.06,14.621,24.756,15.351,24.732,15.357z"/><path fill="#788b9c" d="M28.397,17.715c-1.348-0.224-3.099-0.227-3.116-0.227v-1c0.075,0,1.852,0.003,3.28,0.24	L28.397,17.715z"/><path fill="#788b9c" d="M27.772,20.859c-1.769-0.958-3.475-1.189-3.491-1.191l0.129-0.992	c0.077,0.011,1.908,0.259,3.839,1.305L27.772,20.859z"/><ellipse cx="9.144" cy="17.491" fill="#788b9c" rx="1.12" ry="1.492"/><ellipse cx="21.108" cy="16.498" fill="#788b9c" rx="1.11" ry="1.5"/><ellipse cx="15.278" cy="19.519" fill="#f5ce85" rx="1.466" ry=".996" transform="rotate(-2.987 15.291 19.535)"/><path fill="#967a44" d="M15.213,21.017c-1.034,0-1.856-0.594-1.898-1.396c-0.044-0.838,0.785-1.539,1.885-1.596 c0.632-0.032,1.205,0.149,1.596,0.5c0.274,0.247,0.429,0.556,0.445,0.892c0.019,0.334-0.103,0.656-0.35,0.931 c-0.352,0.391-0.911,0.633-1.535,0.665C15.308,21.016,15.26,21.017,15.213,21.017z M15.343,19.021c-0.029,0-0.06,0.001-0.091,0.002 c-0.589,0.031-0.949,0.344-0.939,0.546c0.011,0.201,0.403,0.476,0.99,0.445c0.42-0.022,0.711-0.188,0.845-0.336 c0.045-0.051,0.099-0.128,0.095-0.21c-0.005-0.083-0.066-0.154-0.117-0.2C15.988,19.146,15.716,19.021,15.343,19.021z"/><path fill="#ea4c89" d="M18.028,8.643c-0.603,0-1.092-0.489-1.092-1.092s0.489-1.092,1.092-1.092 c0.397,0,0.745,0.212,0.936,0.529"/><path fill="#ea4c89" d="M18.028,9.143c-0.878,0-1.593-0.714-1.593-1.592s0.715-1.592,1.593-1.592 c0.555,0,1.077,0.296,1.363,0.771l-0.855,0.516c-0.109-0.18-0.299-0.287-0.508-0.287c-0.327,0-0.593,0.266-0.593,0.592 s0.266,0.592,0.593,0.592V9.143z"/><path fill="#ea4c89" d="M22.435,8.561c0.582,0,1.053,0.454,1.053,1.015c0,0.56-0.312,1.015-1.053,1.015 c-0.153,0-0.454-0.101-0.585-0.157"/><path fill="#ea4c89" d="M22.435,11.09c-0.321,0-0.779-0.196-0.783-0.198l0.396-0.918c0.116,0.051,0.325,0.112,0.392,0.116 c0.383,0,0.548-0.154,0.548-0.515c0-0.284-0.248-0.515-0.553-0.515v-1c0.856,0,1.553,0.68,1.553,1.515 C23.987,10.495,23.378,11.09,22.435,11.09z"/><path fill="#ea4c89" d="M16.076,10.719c-0.532,0-0.834-0.104-0.894-0.126c-2.254-1.047-1.266-4.229-1.223-4.364	c1.269-3.431,2.978-3.257,3.173-3.228c2.131,0.278,3.015,2.408,3.295,3.311l-0.955,0.297c-0.223-0.719-0.912-2.412-2.483-2.617	c-0.017,0.001-1.124-0.029-2.084,2.563c0,0.002-0.757,2.455,0.665,3.116l0,0c0.012,0.001,0.872,0.249,2.449-0.394l0.377,0.926	C17.395,10.611,16.617,10.719,16.076,10.719z"/><path fill="#ea4c89" d="M23.091,13.126c-0.063,0-0.127-0.002-0.191-0.008c-1.086-0.09-2.005-0.771-2.587-1.916l0.891-0.453	c0.426,0.837,1.041,1.312,1.779,1.373c0.936,0.063,1.624-0.806,1.887-1.188c0.327-0.476,1.3-2.108,0.085-3.161	c-0.469-0.406-1.504-0.359-2.77,0.126l-0.357-0.934c0.963-0.37,2.735-0.855,3.781,0.052c1.225,1.061,1.257,2.779,0.085,4.483	C24.977,12.543,24.037,13.126,23.091,13.126z"/><path fill="#788b9c" d="M4.449,12.455l-0.92-0.395c0.492-1.147,1.656-2.528,1.705-2.587l0.764,0.646	C5.986,10.133,4.881,11.446,4.449,12.455z"/><circle cx="20.212" cy="8.799" r="2.184" fill="#ffb5d2"/><path fill="#ea4c89" d="M20.212,11.482c-1.479,0-2.684-1.204-2.684-2.684s1.204-2.684,2.684-2.684	c1.378,0,2.524,1.031,2.668,2.399c0.011,0.09,0.016,0.186,0.016,0.284C22.896,10.278,21.691,11.482,20.212,11.482z M20.212,7.115	c-0.929,0-1.684,0.755-1.684,1.684s0.755,1.684,1.684,1.684s1.684-0.755,1.684-1.684c0-0.06-0.003-0.118-0.01-0.175	C21.796,7.762,21.076,7.115,20.212,7.115z"/></svg>`;
        
        // Ajustar la posición del div
        const randomX = Math.floor(Math.random() * (window.innerWidth - 30));
        const randomY = Math.floor(Math.random() * (window.innerHeight - 30));
        div.style.position = 'absolute';
        div.style.left = `${randomX}px`;
        div.style.top = `${randomY}px`;
        div.style.zIndex = 1000; // Asegurarnos de que esté por encima de otros elementos

        // Añadir el div al body
        document.body.appendChild(div);
        
        // Eliminar el div después de 2 segundos
        setTimeout(() => {
            div.remove();
        }, 2000);
    });
});

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
});
