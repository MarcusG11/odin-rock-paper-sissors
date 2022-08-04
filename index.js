function getComputerChoice() {
  const gameArray = ["rock", "paper", "sissors"];
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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === computerSelection) {
    console.log(
      `It's a tie! ${playerSelection} cancels out ${computerSelection}`
    );
  } else {
    console.log(`You lose. ${playerSelection} loses to ${computerSelection}`);
  }
}

playRound(playerSelection, computerSelection);
