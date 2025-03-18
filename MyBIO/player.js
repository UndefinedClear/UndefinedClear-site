document.addEventListener('mousemove', function(event) {
    const wrapper = document.querySelector('.wrapper');

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
    wrapper.style.transform = `rotateX(${yAxis * 30}deg) rotateY(${xAxis * 30}deg)`;
});
