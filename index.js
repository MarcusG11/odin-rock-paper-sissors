function getComputerChoice() {
  const gameArray = ["rock", "paper", "scissors"];
  const computerChoice = gameArray[~~(Math.random() * gameArray.length)];
  return computerChoice;
}

function getPlayerChoice() {
  const playerSelection = prompt("Choose wisely!");
  return playerSelection;
}

const playerSelectionPrompt = getPlayerChoice();
const playerSelection = playerSelectionPrompt.toLowerCase();
const computerSelection = getComputerChoice();
let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    userScore++;
    return userScore;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    userScore++;
    return userScore;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    userScore++;
    return userScore;
  } else if (playerSelection === computerSelection) {
    console.log(
      `It's a tie! ${playerSelection} cancels out ${computerSelection}`
    );
  } else {
    console.log(`You lose. ${playerSelection} loses to ${computerSelection}`);
    computerScore++;
    return computerScore;
  }
}

console.log(userScore);
console.log(computerScore);

playRound(playerSelection, computerSelection);

function game() {
  for (let i = 0; i < 5; i++) {}
}
