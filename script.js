let size = 16;
let side = 600/size;
const divGrid = document.querySelector('#grid');
const btnReset = document.querySelector('#btn-reset');
btnReset.addEventListener('click', createCustomGrid);
const checkboxRainbow = document.querySelector('#checkbox-rainbow');

function createGrid(size){
    for (let i = 0; i < Math.pow(size, 2); i++) {
        let square = document.createElement('div');
        side = 600/size;
        square.setAttribute('style', `width: ${side}px; height: ${side}px; border: solid 1px black; box-sizing: border-box;`);
        square.classList.add("square");
        divGrid.appendChild(square);
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener('mouseenter', fillSquare));
}

function createCustomGrid() {
    let size = 101;
    while (size > 100) {
        size = Number(prompt("Input size <= 100", 16));
    }
    while (divGrid.firstChild) { divGrid.removeChild(divGrid.firstChild); }
    createGrid(size);
}

function fillSquare(e) {
    let randomColor = Math.floor(Math.random()*0xFFFFFF).toString(16);
    console.log(randomColor);
    (checkboxRainbow.checked) ? e.target.setAttribute('style', `width: ${side}px; height: ${side}px; border: solid 1px black; box-sizing: border-box; background-color: #${randomColor}`) : 
    e.target.setAttribute('style', `width: ${side}px; height: ${side}px; border: solid 1px black; box-sizing: border-box; background-color: #000000`);
}

createGrid(size);

