document.addEventListener('DOMContentLoaded', () => {
  const background = document.querySelector('.background');
  const backgroundOverlay = document.querySelector('.background-overlay');
  const star = document.getElementById('interactive-star');
  const buyButton = document.querySelector('.buy-token-btn');

  function updateBackgroundColor(color) {
    backgroundOverlay.style.background = color;
  }

  star.addEventListener('mouseenter', () => {
    updateBackgroundColor('rgba(156, 39, 176, 0.2)'); // Neon purple with opacity
  });

  star.addEventListener('mouseleave', () => {
    updateBackgroundColor('transparent');
  });

  buyButton.addEventListener('mouseenter', () => {
    updateBackgroundColor('rgba(0, 255, 127, 0.2)'); // Neon green with opacity
  });

  buyButton.addEventListener('mouseleave', () => {
    updateBackgroundColor('transparent');
  });
});