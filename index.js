//Detecting button press
var numOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

function handleClick(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    animation(buttonInnerHTML);
}
}

//Detecting keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animation(event.key);
})
//common functiom
function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(key);
    }
}

//animation
function animation(currentKey){
    var activekey= document.querySelector("."+currentKey);
    activekey.classList.add("pressed");

    setTimeout(function(){
        activekey.classList.remove("pressed");
    },100);
}