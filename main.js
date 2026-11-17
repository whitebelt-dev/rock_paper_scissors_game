// This function makes the computer select a random choice.
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


// This function ask the user for their choice.
function getHumanChoice() {
    // Prompt the user to choose their answer.
    let humanChoice = prompt(`The computer already made a choice, what's yours?
         Rock, paper or scissors?`);
    // Lowercase user's answer and return that value.
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}


// Here are the variables to store the scores.
let humanScore = 0;
let computerScore = 0;


// This function takes computer and human choices, decide who wins and add
// a point to the winner of the round. 
function playRound(computerChoice, humanChoice) {
    // Get computer and human choice. 
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    // Conditional logic to get the winner of the round.
    // If human choose rock:
    if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You loose! Paper beats rock!");
        computerScore += 1;
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats scissors");
            humanScore += 1;
        // If human choose paper:
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock!");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You loose! Scissors beats paper!");
            computerScore += 1;    
        // If human choose scissors:
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper!")
            humanScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You loose! Rock beats scissors!")
            computerScore += 1;      
        // If both selected the same choice:
        } else {
            console.log(`You both chose the same option. No point 
                for anyone!`)
        }
    }


// Build a function to play the game 5 times.
// - This functions needs to call playRound 5 times.
// - It calls storeScore as well.
// - It has to reset the scores for future games.
function playGame() {
    let counter = 0
    while (counter < 5) {
        playRound()
        counter += 1
    };
    declareWinner(humanScore, computerScore);
}
playGame()
// Build a function to declare a winner (declareWinner)
// - Once all 5 rounds are played, call this function to know who win. 
// - Compare computer and human scores and build conditional logic to declare a winner.
function declareWinner(humanScore, computerScore) {
    let scorePrompt = `---FINAL SCORE---\nYou:${humanScore}\nComputer:${computerScore}\n`
    if(humanScore > computerScore){
        console.log(scorePrompt +"YOU WIN!")
    } else if (humanScore < computerScore) {
        console.log(scorePrompt +"You loose :(")
    } else {
        console.log(scorePrompt +"It's a tie, no one wins!")
    }
}
