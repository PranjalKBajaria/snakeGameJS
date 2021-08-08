// Initialising the position of the snake
let inputDir = {x: 0, y: 0};

// let board = document.querySelector('#board');

//  Initialising the sounds in the game
const foodSound = new Audio('Resources/food.mp3');
const gameOverSound = new Audio('Resources/gameover.mp3');
const moveSound = new Audio('Resources/move.mp3');
const musicSound = new Audio('Resources/bg.mp3');
musicSound.volume = 0.4;
let speed = 5;
let lastPaintTime = 0;
let score = 0;

let snakeArr = [
    {x: 13, y:15}
]

let food = {x: 6, y:7}; 

const main = (ctime) => {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(arr){
    return false;
}

function gameEngine(){

    // COllision Detection
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0, y: 0};
        alert("GAME OVER! Press any key to continue.");
        snakeArr = [{x: 13, y:15}]
        musicSound.play();
        score = 0;
    }

    // If snake has eaten another morsel fof food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodSound.play();
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x,
                          y: snakeArr[0].y + inputDir.y})
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }

    // Snake movement
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head')
        } else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}


musicSound.play();
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = {x: 0, y: 1};
    moveSound.play();
    switch (e.key) {

        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }

})
