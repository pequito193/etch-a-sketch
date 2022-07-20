//Function that creates the grid
function createGrid () {
    let gridSize = prompt('Choose grid size: ');
    if (gridSize < 4 || gridSize > 48) {
        alert('INVALID GRIDSIZE, PICK A NUMBER BETWEEN 4 AND 48')
    }
    else if (gridSize >= 4 || gridSize <= 48) {
        container.remove('divs')
        for (let i = 0; i < (gridSize * gridSize); i++) {
            const divs = document.createElement('div')
            divs.classList.add('grid')
            container.appendChild(divs)
        }
    }
}

//Create button that resizes our grid
const body = document.body
const button = document.createElement('button')
button.textContent = 'Change Size'
button.addEventListener('click', createGrid)
body.appendChild(button)

const container = document.querySelector('.container')
for (let i = 0; i < 16; i++) {
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

document.querySelectorAll('div').forEach(div => div.addEventListener('mouseenter', e =>{
    div.style.backgroundColor = randomColour()
}));