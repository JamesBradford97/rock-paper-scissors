console.log("Welcome");

// Write a function called "getComputerChoice" that returns Rock, Paper or Scissors.
function getComputerChoice (){
    let choice = Math.floor(Math.random()*3) + 1;
    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            console.log("Error detected in getComputerChoice function");
            break;
    }
}
// console.log(getComputerChoice());

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters (playerSelection and computerSelection) and return
// a string that declares the winner or tie of the round. eg "You lose! Paper beats Rock"
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return `You draw! ${playerSelection} equals ${computerSelection}`;
    }else if((playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock")){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getUserInput(){
    let input = prompt("Your turn! Enter Rock, Paper, or Scissors.");
    return input.toLowerCase();
}

const playerSelection = getUserInput();
const computerSelection = getComputerChoice().toLowerCase();

console.log(playRound(playerSelection,computerSelection));

// Make functions case insensitive

// Write a new function called playGame().Use previous function inside of this to play a five round game that keeps score and reports a winner or loser at the end.
// Use prompt to get user's input