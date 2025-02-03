document.addEventListener('DOMContentLoaded', () => {
  const starsContainer = document.querySelector('.falling-stars-container');
  
  function createFallingStar() {
    const star = document.createElement('div');
    star.classList.add('falling-star');
    
    // Random horizontal start position
    const startX = Math.random() * window.innerWidth;
    star.style.left = `${startX}px`;
    
    // Random starting opacity and size
    const opacity = 0.3 + Math.random() * 0.4;
    const size = 1 + Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size * 10}px`;
    star.style.opacity = opacity;
    
    starsContainer.appendChild(star);
    
    // Animate falling
    gsap.to(star, {
      y: window.innerHeight + 100,
      x: startX + (Math.random() - 0.5) * 200,
      rotation: -45,
      duration: 3 + Math.random() * 3,
      ease: 'linear',
      onComplete: () => {
        star.remove();
        createFallingStar();
      }
    });
  }
  
  // Create initial set of falling stars
  for (let i = 0; i < 20; i++) {
    createFallingStar();
  }
});