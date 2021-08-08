// Initialising the position of the snake
let directions = {x: 0, y: 0};

// let board = document.querySelector('#board');

//  Initialising the sounds in the game
const foodSound = new Audio('Resources/food.mp3');
const gameOverSound = new Audio('Resources/gameover.mp3');
const moveSound = new Audio('Resources/move.mp3');
const musicSound = new Audio('Resources/bg.mp3');
let speed = 2;
let lastPaintTime = 0;


let snakeArr = [
    {x: 13, y:15}
]

const main = (ctime) => {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
    })
}





window.requestAnimationFrame(main);