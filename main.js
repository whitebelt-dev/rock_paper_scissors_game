// Build a function that returns computer's choice (getComputerChoice):
function getComputerChoice() {
    // Generate a random number from 0 to 2.
    let randomNumber = Math.floor(Math.random() * 3);
    // Relate the random number with one of the options.
    if (randomNumber === 0) {
        computerChoice = "paper";
    } else if (randomNumber === 1){
        computerChoice = "scissors"
    } else {
        computerChoice = "rock"
    };
    // Return the computer's choice.
    return computerChoice; 
}


// Build a function that returns human's choice (getHumanChoice):
function getHumanChoice() {
    // Prompt the user to choose their answer.
    let humanChoice = prompt(`The computer already made a choice, what's yours?
         Rock, paper or scissors?`);
    // Lowercase user's answer and return that value.
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}


// Declare computer and human score variables (humanScore, computerScore)
let humanScore = 0;
let computerScore = 0;


// Build a function that takes computer's and human's choice, and return the 
// winner. Add the point to the winner's variable (playRound):
// - This function needs to call computerChoice and humanChoice
// - Build the conditional logic to declare a winner.
// - If it's a tie, no score is stored (and repeat the round?. (while loop))
// - Return winner
function playRound(computerChoice, humanChoice) {
    // Call and get computer and human choice. 
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    // Conditional logic to get the winner of the round.
    // If human choose rock:
    if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You loose! Paper beats rock!")
        computerScore += 1
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats scissors")
            humanScore += 1
        // If human choose paper:
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock!")
            humanScore += 1
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You loose! Scissors beats paper!")
            computerChoice += 1      
        // If human choose scissors:
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper!")
            humanChoice += 1
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You loose! Rock beats scissors!")
            computerChoice += 1       
        // If both selected the same choice:
        } else {
            console.log(`It's a tie! You both chose the same option. Let's play
                 the round again!`)
            playRound()
        }
    }


// Maybe build a function to store the point for the winner so playRound is not 
// overloaded (storeScore).
// - Identify the winner and store the point in winner's variable.
function storeScore() {

}


// Build a function to play the game 5 times.
// - This functions needs to call playRound 5 times.
// - It calls storeScore as well.
// - It has to reset the scores for future games.
function playGame() {

}


// Build a function to declare a winner (declareWinner)
// - Once all 5 rounds are played, call this function to know who win. 
// - Compare computer and human scores and build conditional logic to declare a winner.
function declareWinner() {

}
