function getComputerChoice() {
  const gameArray = ["Rock", "Paper", "Scissors"];
  const computerChoice = gameArray[~~(Math.random() * gameArray.length)];
  return computerChoice;
}

function getPlayerChoice() {
  const playerSelection = prompt("Choose wisely!");
  return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    userScore++;
    return userScore;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    userScore++;
    return userScore;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
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
