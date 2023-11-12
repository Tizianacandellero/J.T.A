const width = 28;
const grid = document.querySelector(".grid");
const scoreDisplay = document.getElementById("score");
let score = 0;
const squares = [];

// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty
const layout=[
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 
];
function createPacBoard() {
    if (!grid) {
        console.error('El elemento grid no existe');
        return;
    }
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement("div");
        grid.appendChild(square);
        squares.push(square);
        // añadiendo las clases según el layout
        if (layout[i] === 0) {
            square.classList.add("pac-dot");
        } else if (layout[i] === 1) {
            square.classList.add("cajas");
        } else if (layout[i] === 3) {
            square.classList.add("power-pellet");
        }
    }
}
createPacBoard();
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