if (window.performance.navigation.type === 1) {
   // if the page has been refreshed, call the rollDice() function.
  rollDice();
}
function rollDice(){
var randomnum1=Math.floor((Math.random()+Math.random())*3+1);
var dice1="images/dice"+randomnum1+".png";
document.querySelectorAll(".dice")[0].setAttribute("src",dice1);
var randomnum2=Math.floor((Math.random()+Math.random())*3+1);
var dice2="images/dice"+randomnum2+".png";
document.querySelectorAll(".dice")[1].setAttribute("src",dice2);
if(randomnum1>randomnum2){
  document.querySelector("h1").innerHTML="Player 1 WINS!!";
}
else if(randomnum2>randomnum1){
  document.querySelector("h1").innerHTML="Player 2 WINS!!";
}
else{
  document.querySelector("h1").innerHTML="DRAW";
}
}
