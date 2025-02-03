function addChaosCharacter() {
    const chaosEl = document.querySelector('.chaos-character');
    const svg = `
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="50" fill="#00ff7f"/>
            <circle cx="80" cy="80" r="10" fill="white"/>
            <circle cx="120" cy="80" r="10" fill="white"/>
            <path d="M70,120 Q100,150 130,120" stroke="white" fill="transparent"/>
        </svg>
    `;
    chaosEl.innerHTML = svg;

    chaosEl.style.position = 'absolute';
    chaosEl.style.bottom = '50px';
    chaosEl.style.left = '50%';
    chaosEl.style.transform = 'translateX(-50%) scale(1)';
    chaosEl.style.transition = 'transform 0.5s ease';

    chaosEl.addEventListener('mouseenter', () => {
        chaosEl.style.transform = 'translateX(-50%) scale(1.2)';
    });

    chaosEl.addEventListener('mouseleave', () => {
        chaosEl.style.transform = 'translateX(-50%) scale(1)';
    });
}

window.addEventListener('load', addChaosCharacter);