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
        if (layout[i] === 1) {
            square.classList.add("azul");
        } else if (layout[i] === 2) {
            square.classList.add("rojo");
        } else if (layout[i] === 3) {
            square.classList.add("amarillo");
        } else if (layout[i] === 4) {
            square.classList.add("verde");
        } else {
            square.classList.add("vacio");

        }
    }
}

let DotsGameCurrentIndex = 0; // Inicializar en el primer índice
createDotsGame();

function Dots(e) {
    var elemento = e.target.classList[0];
    console.log(elemento);
    switch (elemento) {
        case "azul": 
            if (DotsGameCurrentIndex % width !== 0 && !squares[DotsGameCurrentIndex - 1].classList.contains('azul'))
                DotsGameCurrentIndex -= 1;
            break;
        case "rojo": 
            if (DotsGameCurrentIndex - width >= 0 && !squares[DotsGameCurrentIndex - width].classList.contains('rojo'))
                DotsGameCurrentIndex -= width;
            break;
        case "amarillo": 
            if (DotsGameCurrentIndex % width < width - 1 && !squares[DotsGameCurrentIndex + 1].classList.contains('amarillo'))
                DotsGameCurrentIndex += 1;
            break;
        case "verde": 
            if (DotsGameCurrentIndex + width < width * width && !squares[DotsGameCurrentIndex + width].classList.contains('verde'))
                DotsGameCurrentIndex += width;
            break;
        default:
            break;
        }

    squares[DotsGameCurrentIndex].classList.add("DotsGame");
    azulEaten();
}

document.addEventListener("click", Dots);

function azulEaten() {
    if (squares[DotsGameCurrentIndex].classList.contains('azul')) {
        score++;
        scoreDisplay.textContent = score;
        squares[DotsGameCurrentIndex].classList.remove('azul');
    }
}
/*
function createDotsGame() {
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement("div");
        grid.appendChild(square);
        squares.push(square);

        if (layout[i] === 1) {
            square.classList.add("azul");
        } else if (layout[i] === 2) {
            square.classList.add("rojo");
        } else if (layout[i] === 3) {
            square.classList.add("amarillo");
        } else if (layout[i] === 4) {
            square.classList.add("verde");
        }else{
            square.classList.add("vacio");
        }
    }
}*/