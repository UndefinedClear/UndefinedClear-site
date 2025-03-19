// VARS
const avatar = 'https://avatars.githubusercontent.com/u/91841844?v=4';

// ELEMENTS
const show_yap_element = document.getElementById('show-yap');
const popup_element = document.getElementById('popup');
const close_btn_element = document.getElementById('close-btn');
const avatar_element = document.getElementById('avatar');

// EVENTS
window.addEventListener('DOMContentLoaded', dom_loaded_event);

// Отслеживаем движение мыши
document.addEventListener('mousemove', function(event) {
    const container = document.querySelector('.profile');
    if (!container) return; // Check if container exists

    const curveX = 30;
    const curveY = 30;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const xAxis = (mouseX / windowWidth) - 0.5;
    const yAxis = (mouseY / windowHeight) - 0.5;

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
        avatar_element.onerror = function() {
            console.error('Failed to load avatar image.');
        };
    }
}

function enable() {
    let music = document.getElementById('music');
    if (music) {
        music.volume = 0.2;
        music.play().catch(error => {
            console.error('Failed to play music:', error);
        });
    }

    document.getElementById('container').removeAttribute('hidden');
    document.getElementById('open').setAttribute('hidden', true);
}

function dom_loaded_event(event) {
    avatar_event(event);
    
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = avatar;
