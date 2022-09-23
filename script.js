// Choices Array 
const choices = ['ROCK' , 'PAPER' , 'SCISSORS'];
let playerInput='';
let playerSelection='';
let computerWins = 0;
let playerWins = 0;
let computerSelection='';
// Computer Choice Selection
function getComputerChoice(){
    return computerSelection =choices[Math.floor(Math.random()*choices.length)];
    
}
// Player Choice Selection
function getPlayerChoice(){
playerInput = prompt("Make your Choice , Outlander");
return playerSelection=playerInput.toUpperCase();
}

// Checking Choice
if(choices.includes(playerSelection)){
    console.log("Atleast you have brain")
}
else if(playerSelection==''){
    console.log("Make your choice, FOOL!")
}
else{
    console.log("IDIOT!")
}

// Function to play a round
function playRound(playerSelection,computerSelection){
    if(playerSelection==='ROCK' & computerSelection==='PAPER'){
        computerWins++;
        return alert("LOL! YOU LOST");
    }
    else if(playerSelection==='ROCK' & computerSelection==='SCISSORS'){
        playerWins++;
        return alert("Victory!"); 
    }
    else if(playerSelection==='PAPER' & computerSelection==='SCISSORS'){
        computerWins++;
        return alert("LOL! YOU LOST");
    }
    else if(playerSelection==='PAPER' & computerSelection==='ROCK'){
        playerWins++;
        return alert("Victory!") ;      
    }
    else if(playerSelection==='SCISSORS' & computerSelection==='ROCK'){
        computerWins++;
        return alert("LOL! YOU LOST");        
    }
    else if(playerSelection==='SCISSORS' & computerSelection==='PAPER'){
        playerWins++;
        return alert("Victory");
                    
    }
    else if(playerSelection==='' & computerSelection!== ''){
        computerWins++;
        return alert("Make your choice fool! and a win for me");


    }
    else{
        return alert("DRAW");
        
        

    }
}

// Prints Score
function getScore(){
    return alert(playerWins +'-'+computerWins);
}

// Play Best of 3 Game
function game(){
    alert("BE READY!");
    for(var i=1;i<=10;i++){
        if(computerWins===3){
            alert("Just like I thought , You stood no chance against me");
            break;
        }
        else if(playerWins===3){
            alert("Victory!");
            break;
        }
        else{}

        getComputerChoice();
        getPlayerChoice();
        playRound(playerSelection,computerSelection);
        getScore();

    }

}

game();

