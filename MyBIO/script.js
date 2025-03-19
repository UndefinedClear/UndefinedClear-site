// VARS
const avatar = 'https://avatars.githubusercontent.com/u/91841844?v=4';

// ELEMENTS
const show_yap_element = document.getElementById('show-yap');
const popup_element = document.getElementById('popup');
const close_btn_element = document.getElementById('close-btn');
const avatar_element = document.getElementById('avatar');

// EVENTS
window.addEventListener('DOMContentLoaded', dom_loaded_event);
//document.addEventListener("touchmove", touchMove);

// Отслеживаем движение мыши
document.addEventListener('mousemove', function(event) {
    const container = document.querySelector('.profile');

    const curveX = 30;
    const curveY = 30;

    // Получаем координаты мыши
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Получаем ширину и высоту окна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Нормализуем координаты мыши для получения значений от -1 до 1
    const xAxis = (mouseX / windowWidth) - 0.5; // Диапазон от -0.5 до 0.5
    const yAxis = (mouseY / windowHeight) - 0.5; // Диапазон от -0.5 до 0.5

    // Применяем трансформацию, чтобы создать эффект 3D
    container.style.transform = `rotateX(${yAxis * curveX}deg) rotateY(${xAxis * curveY}deg)`;
});

// EVENTS
if (show_yap_element) {
    show_yap_element.addEventListener('click', show_yap_event);
}

if (close_btn_element) {
    close_btn_element.addEventListener('click', close_yap_event);
}

// CALLBACKS
function show_yap_event(event) {
    if (popup_element) {
        popup_element.removeAttribute('hidden');
    }
}

function close_yap_event(event) {
    if (popup_element) {
        popup_element.setAttribute('hidden', true);
    }
}

function avatar_event(event) {
    if (avatar_element) {
        avatar_element.setAttribute('src', avatar); // Set avatar image
    }
}

function enable() {
    let music = document.getElementById('music'); music.volume = 0.2;
    music.play();

    document.getElementById('container').removeAttribute('hidden');
    document.getElementById('open').setAttribute('hidden', true);
}

function dom_loaded_event(event) {
    avatar_event(event);
    
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = avatar;
}
