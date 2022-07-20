let gridSize = 16;

//Function that creates the grid
function createGrid () {
    let gridSize = prompt('Choose grid size: ');
    if (gridSize < 4 || gridSize > 32) {
        alert('INVALID GRIDSIZE, PICK A NUMBER BETWEEN 4 AND 32')
    }
    else if (gridSize >= 4 || gridSize <= 32) {
        container.innerHTML = ''
        container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`);
        for (let i = 0; i < (gridSize * gridSize); i++) {
            const divs = document.createElement('div')
            divs.classList.add('grid')
            container.appendChild(divs)
        }
    }
}


//AddEventListener to button that resizes our grid
const button = document.querySelector('#button')
button.addEventListener('click', createGrid)


//AddEventListener to button that resets the grid's colour
const eraser = document.querySelector('#eraser')
eraser.addEventListener('click', e => {
    let squares = container.children;
    for(let i = 0; i < gridSize * gridSize; i++) {
        squares[i].style.backgroundColor = 'white';
    }
})


//Creates the default grid
const container = document.querySelector('.container')
container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`);
for (let i = 0; i < gridSize * gridSize; i++) {
    const divs = document.createElement('div')
    divs.classList.add('grid')
    container.appendChild(divs)
}


//Change a div's colour when hovered over
function randomColour () {
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);
var bgColor = "rgb(" + x + "," + y + "," + z + ")";
return bgColor;
}


//Paints the grid squares with random colours
document.querySelectorAll('.grid').forEach(div => div.addEventListener('mouseenter', e => {
    div.style.backgroundColor = randomColour()
}))