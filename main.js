// Build a function that returns computer's choice (getComputerChoice):
function getComputerChoice() {
    // Declare variable to store computer's choice.
    let computerChoice = "";
    // Declare the options.
    let paper = "paper";
    let scissors = "scissors";
    let rock = "rock";
    // Generate a random number from 0 to 2.
    let randomNumber = Math.floor(Math.random() * 3);
    // Relate the random number with one of the options.
    if (randomNumber === 0) {
        computerChoice = paper;
    } else if (randomNumber === 1){
        computerChoice = scissors
    } else {
        computerChoice = rock
    };
    // Return the computer's choice.
    return computerChoice; 
}


// Build a function that returns human's choice (getHumanChoice):
function getHumanChoice() {
    // Prompt the user to choose their answer.
    let humanChoice = prompt("Rock, paper or scissors?");
    // Lowercase user's answer and return that value.
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}



// Declare computer and human score variables (humanScore, computerScore)
// - Create 2 variables: one for computer's choice and one for human's choice
// - Set both at 0. 
// - Here's were the winner of each round will be granted a point
let humanScore = 0;
let computerScore = 0;


// Build a function that takes computer's and human's choice, and return the 
// winner. Add the point to the winner's variable (playRound):
// - This function needs to call computerChoice and humanChoice
// - Build the conditional logic to declare a winner.
// - If it's a tie, no score is stored (and repeat the round?. (while loop))
// - Return winner
function playRound(computerChoice, humanChoice) {

}


// Maybe build a function to store the point for the winner so playRound is not 
// overloaded (storeScore).
// - Identify the winner and store the point in winner's variable
function storeScore() {

}


// Build a function to play the game 5 times
// - This functions needs to call playRound 5 times.
// - It calls storeScore as well.
function playGame() {

}


// Build a function to declare a winner (declareWinner)
// - Once all 5 rounds are played, call this function to know who win. 
// - Compare computer and human scores and build conditional logic to declare a winner.
function declareWinner() {

}
