function diceRoll(){
    alert("In Dice Game");
   var sum = random();
   console.log("HELLO!!!!!!!!");
   if(sum == 7 || sum==11){
       document.getElementById("diceOutput").innerHTML = "You rolled " + sum + " You Win!";
   }
   else if(sum == 2 || sum==3 || sum==12){
       document.getElementById("diceOutput").innerHTML = "You rolled " + sum +" You lose!";
   }
   else{
       document.getElementById("diceOutput").innerHTML = "You rolled " + sum + " Nothing";
   }
   
}
function random(){
   var num1 = Math.floor(Math.random()*6)+ 1;
   var num2 = Math.floor(Math.random()*6)+ 1;
   var sum = num1+num2;
   return sum;
}


