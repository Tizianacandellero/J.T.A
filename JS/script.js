const width = 5;
const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
let score = 0;
const squares = [];

// 0 - espacio
// 1 - azul
// 2 - rojo
// 3 - amarillo
// 4 - verde
const layout = [
    1, 2, 0, 3, 4,
    0, 0, 0, 0, 0,
    0, 0, 3, 4, 1,
    0, 0, 0, 2, 0,
    0, 0, 0, 0, 0
];
function createDotsGame() {
    if (!grid) {
        console.error('El elemento grid no existe');
        return;
    }
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement("div");
        grid.appendChild(square);
        squares.push(square);
        // añadiendo las clases según el layout
        square.classList.add("vacio");
        if (layout[i] === 1) {
            square.classList.add("azul");
        } else if (layout[i] === 2) {
            square.classList.add("rojo");
        } else if (layout[i] === 3) {
            square.classList.add("amarillo");
        } else if (layout[i] === 4) {
            square.classList.add("verde");
        }
    }
}
createDotsGame();
let pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add("pacman");
function control(e) {
    squares[pacmanCurrentIndex].classList.remove("pacman");
    switch (e.keyCode) {
        case 37:
            if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex - 1].classList.contains('wall'))
                pacmanCurrentIndex -= 1;
            break;
        case 38:
            if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains('wall'))
                pacmanCurrentIndex -= width;
            break;
        case 39:
            if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex + 1].classList.contains('wall'))
                pacmanCurrentIndex += 1;
            break;
        case 40:
            if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList.contains('wall'))
                pacmanCurrentIndex += width;
            break;
    }
    squares[pacmanCurrentIndex].classList.add("pacman");
    pacDotEaten();
}
document.addEventListener("keyup", control);
function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score++;
        scoreDisplay.textContent = score;
        squares[pacmanCurrentIndex].classList.remove('pac-dot');
    }
}