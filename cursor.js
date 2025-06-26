document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('[data-cursor-dot]');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
    });

    // Adiciona a classe 'hover' ao PONTO quando o mouse entra em um link ou botão
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('hover');
        });
    });
});
