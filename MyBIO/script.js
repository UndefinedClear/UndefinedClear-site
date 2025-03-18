// VARS
const avatar = 'https://avatars.githubusercontent.com/u/91841844?v=4';

// ELEMENTS
const show_yap_element = document.getElementById('show-yap');
const popup_element = document.getElementById('popup');
const close_btn_element = document.getElementById('close-btn');
const avatar_element = document.getElementById('avatar');

// EVENTS
window.addEventListener('DOMContentLoaded', dom_loaded_event);

// Add click events if elements exist
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