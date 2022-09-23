// Choices Array 
const choices = ['ROCK' , 'PAPER' , 'SCISSORS'];
let playerInput='';
let playerSelection='';
let computerWins = 0;
let playerWins = 0;
// Random Choice Function
function getcomputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice(){
playerInput = prompt("Make your Choice , Outlander");
return playerSelection=playerInput.toUpperCase();
}
// Computer Choice Selection
let computerSelection=getcomputerChoice();

// Player Choice Selection

getPlayerChoice();





if(choices.includes(playerSelection)){
    console.log("Atleast you have brain")

}
else if(playerSelection==''){
    console.log("Make your choice, FOOL!")
}
else{
    console.log("IDIOT!")
}

function playRound(playerSelection,computerSelection){
    if(playerSelection==='ROCK' & computerSelection==='PAPER'){


    }

}


