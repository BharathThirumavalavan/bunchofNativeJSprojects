let bodyBg = document.querySelector('body');
let islandDiv = document.querySelector('#isolate');
let titleEl = document.querySelector('#title')
let pCreate = document.createElement('span');
pCreate.setAttribute('class', 'colorClass');
let bGround = document.querySelector('#currentBG');
let white = 16777215;


function setColors() {
    let colors = createColor(); 
    console.log(colors);
    addColorsCSS(colors);
   
   
}

function addColorsCSS(color){
    pCreate.textContent = ` #${color.newColor}`;
    bGround.appendChild(pCreate);
    bodyBg.style.backgroundColor = `#${color.newColor}`;
    islandDiv.style.backgroundColor =`#${color.oppColor}`;
    bGround.style.color =`#${color.newColor}`;
    console.log(islandDiv.childNodes)
    titleEl.style.color =`#${color.newColor}`;
}

function createColor() {
    let getColor = Math.floor(Math.random() * white);
    let oppColor = white - getColor;
    return {
        newColor:colorCode(getColor), 
        oppColor:colorCode(oppColor)
    };
}

function colorCode(color) {
    return color.toString(16).padStart(6, "0");
}



islandDiv.addEventListener('click', setColors);