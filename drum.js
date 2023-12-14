
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var innerTex=this.innerHTML;
        playSound(innerTex);
        buttonAnimation(innerTex)
    })

    document.addEventListener("keypress",function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})

}

function playSound(key){
    switch(key){
        case 'i':
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;
        case 'c':
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;
        case 'h':
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        case 'a':
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;
        case 'm':
            var tom5=new Audio("./sounds/snare.mp3");
            tom5.play();
        break;
        case 'b':
            var tom6=new Audio("./sounds/crash.mp3");
            tom6.play();
        break;
        case 'r':
            var tom7=new Audio("./sounds/kick-bass.mp3");
            tom7.play();
        break;
        default:
            console.log("not valid");
        break;
    }
}

//button animations with timeout
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}

