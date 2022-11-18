let hole =document.getElementById("hole");
let game=document.getElementById("game");
let score=0;
let jumping=0;
let result=document.getElementById("result");
let text=document.getElementById("text");
hole.addEventListener("animationiteration",RanHole)

function RanHole(){
    var random=-((Math.random()*350)+150)
    hole.style.top=random+"px";
    score++;
}

let fall=setInterval(function(){
    let birdtop=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (jumping==0){
        bird.style.top=(birdtop+2)+"px"
    }
    let blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    let holetop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let htop=(500+holetop);
    if ((birdtop>450)||((blockleft<50)&&(blockleft>-50)&&((birdtop<htop)||(birdtop>htop+100)))){
        result.style.display="block";
        text.innerText=`your final score is :${score}`;
        game.style.display="none";
        score=0;
    }
},10)
window.addEventListener("keydown",hop)
function hop()
{
    jumping=1;
    let birdtop=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (birdtop>6){
        bird.style.top=(birdtop-60)+"px";
    }
    setTimeout(function(){
        jumping=0
    },100)
}