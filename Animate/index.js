const menuEl = document.getElementById("menu");
const containerEl = document.getElementById("container");
const contentsEl = document.querySelector('img');
const listEl = document.querySelectorAll('li');




containerEl.addEventListener('mousemove',containerOn);
containerEl.addEventListener('mouseleave',containerOut);
containerEl.addEventListener('mouseenter',containerIn);

function containerOn(e){
    let xAxis = ((window.innerWidth/2)-e.pageX)/15;
    let yAxis = ((window.innerHeight/2)-e.pageY)/15;
    console.log(e.pageX,e.pageX );
    console.log(xAxis,yAxis );
    menuEl.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    contentsEl.style.transform = `translateZ(50px)`;
    listEl.forEach(
        (x)=>{
            x.style.transform = `translateZ(20px)`;
        }
    )
}

function containerOut(){
    menuEl.style.transition = `all 300ms ease-in`;
    menuEl.style.transform = `rotateY(0deg) rotateX(0deg)`;
   
}

function containerIn(){
    menuEl.style.transition = `none`;
}

