document.addEventListener('DOMContentLoaded', () => {
  const cursorStar = document.querySelector('.cursor-star');
  
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursorStar, {
      x: e.clientX - 10,
      y: e.clientY - 10,
      ease: 'power1.out',
      duration: 0.2
    });
  });
});