document.getElementById('startButton').addEventListener('click', () => {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear previous circles

    const width = parseInt(document.getElementById('width').value, 10);
    const growth = parseInt(document.getElementById('growth').value, 10);
    const rate = parseInt(document.getElementById('rate').value, 10);
    const numCircles = parseInt(document.getElementById('numCircles').value, 10);

    for (let i = 0; i < numCircles; i++) {
        createCircle(width, growth, rate);
    }
});

function createCircle(initialWidth, growth, rate) {
    const container = document.getElementById('container');

    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.width = `${initialWidth}px`;
    circle.style.height = `${initialWidth}px`;
    circle.style.backgroundColor = getRandomColor();
    circle.style.top = `${Math.random() * (window.innerHeight - initialWidth)}px`;
    circle.style.left = `${Math.random() * (window.innerWidth - initialWidth)}px`;

    container.appendChild(circle);

    let currentWidth = initialWidth;

    const intervalId = setInterval(() => {
        currentWidth += growth;
        circle.style.width = `${currentWidth}px`;
        circle.style.height = `${currentWidth}px`;

        // Ensure circle remains within the window boundaries
        const rect = circle.getBoundingClientRect();
        if (rect.top > window.innerHeight || rect.left > window.innerWidth) {
            clearInterval(intervalId);
        }
    }, rate);

    circle.addEventListener('click', () => {
        clearInterval(intervalId);
        circle.remove();
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
