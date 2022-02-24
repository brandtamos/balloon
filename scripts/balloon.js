let intervalId = null;
let leftPixelBound = 100;
let rightPixelBound = 200;
let direction = "right";
let balloonFloatDuration = 300; // seconds the balloon will float
let frameRate = (balloonFloatDuration / 400) * 1000;
let xpos = 150;
let ypos = 0;
function tapBalloon() {
  clearInterval(intervalId);
  //future TODO: add the reset function here
  const elem = document.getElementById("theBalloon");   
  xpos = 150;
  ypos = 0
  
  intervalId = setInterval(frame, frameRate);
  function frame() {
    if (ypos == 350) {
      clearInterval(intervalId);
    } else {
      if(xpos >= rightPixelBound) direction = "left";
      else if(xpos <= leftPixelBound) direction = "right";
      if(direction == "right") xpos++;
      else xpos--;
       
      ypos++;

      elem.style.left = xpos + "px"; 
      elem.style.top = ypos + "px"; 
      
    }
  }
}

function resetBalloon(){

}