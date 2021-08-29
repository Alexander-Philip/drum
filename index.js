var size=document.querySelectorAll(".drum").length;
for(var i=0;i<size;i++){
 document.querySelectorAll("button")[i].addEventListener("click",myfunc);
 function myfunc(){
    var buttonhtml=this.innerHTML;
    makeSound(buttonhtml);
    animation(buttonhtml);
 }
}

document.addEventListener("keypress",myfunction);
function myfunction(event){
    makeSound(event.key);
    animation(event.key);
}
function makeSound(key){
   switch (key) {
      case "w":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
      case "a":
          var kiss_bass = new Audio("sounds/kick-bass.mp3");
          kiss_bass.play();
          break;
      case "s":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
      case "d":
          var tom1=new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
      case "j":
          var tom2=new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
      case "k":
          var tom3= new Audio("sounds/tom-3.mp3");    
          tom3.play();
          break;
      case "l":
          var tom4= new Audio("sounds/tom-4.mp3");
          tom4.play();
          break; 
        
       default: console.log(buttonhtml);
          break;
   }
}
function animation(currentkey){
   var pressedkey = document.querySelector("."+currentkey);
   pressedkey.classList.add("pressed");
   setTimeout(myfunc1,100);
   function  myfunc1(){
      pressedkey.classList.remove("pressed");
   }
}

