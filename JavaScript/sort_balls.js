var bgcolor;

function genRandColor(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  return "rgb("+r+","+g+","+b+")";
}

function genBlueOrRed(){
  var isBlue = Math.floor(Math.random()*2);
  if(isBlue){
    bgcolor = "rgb(0,0,255)";
  }else {
    bgcolor = "rgb(255,0,0)";
  }
}

function setColor(){
  $("#obj").css("background-color", bgcolor);
}

function iter(){
  genBlueOrRed();
  setColor();
}

$(document).ready(function(){
  var t = setInterval(iter, 500);
})
