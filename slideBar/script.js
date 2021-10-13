const sliderBtn = document.getElementById("openSlider");
const sidePanel = document.getElementById("sidePanel");

let clicked = false; 

sliderBtn.addEventListener('click',panelOp);

function panelOp(){
clicked =!clicked;
if(clicked){
sidePanel.style.display = 'none'
}else{
sidePanel.style.display = 'block'
}

}
