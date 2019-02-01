function playRPS(){
    var usr = document.getElementById("userInput");
    usr = usr.value.toLowerCase();
    var computer = random();
    document.getElementById("userOutput").innerHTML = "User chose" + usr;
    document.getElementById("computerOutput").innerHTML = "Computer chose" + computer;
    if( usr == "rock" && computer == "scissors")
    {
        document.getElementById("rpsOutput").innerHTML = "YOU WIN!";
    }
    else if(usr == computer)
    {
        document.getElementById("rpsOutput").innerHTML = "TIE!";
    }
    else if( usr == "paper" && computer == "rock")
    {
        document.getElementById("rpsOutput").innerHTML = "YOU WIN!";
    }
    else if( usr == "scissors" && computer == "paper")
    {
        document.getElementById("rpsOutput").innerHTML = "YOU WIN!";
    }
    else{
        document.getElementById("rpsOutput").innerHTML = "YOU LOSE!";
    }


function random(){
    var num = Math.floor(Math.random()*3)+1;
    console.log(num);
    if(num == 1)
    {
        return "rock";
    }
    else if(num == 2)
    {
        return "paper";
    }
    else{
        return "scissors";
    }
    
}
}

