document.addEventListener('DOMContentLoaded', () => {
  const star = document.getElementById('interactive-star');
  const starContainer = star.closest('.star-container');

  function rotateStar(e) {
    const rect = starContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleX = (mouseY - centerY) / 50;
    const angleY = -(mouseX - centerX) / 50;

    gsap.to(star, {
      rotationX: angleX,
      rotationY: angleY,
      ease: 'power1.out',
      duration: 0.5
    });
  }

  function resetStarRotation() {
    gsap.to(star, {
      rotationX: 0,
      rotationY: 0,
      ease: 'power1.out',
      duration: 0.5
    });
  }

  window.addEventListener('mousemove', rotateStar);
  window.addEventListener('mouseleave', resetStarRotation);

  // Mobile touch events
  window.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    rotateStar(touch);
  });

  window.addEventListener('touchend', resetStarRotation);
});