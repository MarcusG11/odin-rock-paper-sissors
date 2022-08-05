function getComputerChoice() {
  const gameArray = ["rock", "paper", "sissors"];
  const computerChoice = gameArray[~~(Math.random() * gameArray.length)];
  return computerChoice;
}

function getPlayerChoice() {
  const playerSelection = prompt("Choose wisely!");
  return playerSelection;
}

let userScore = 0;
let computerScore = 0;

function game() {
  for (i = 0; i < 5; i++) {
    const playerSelectionPrompt = getPlayerChoice();
    const playerSelection = playerSelectionPrompt.toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    userScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    userScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    userScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `It's a tie! ${playerSelection} cancels out ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose. ${playerSelection} loses to ${computerSelection}`;
  }
}

function whoWon() {
  if (userScore > computerScore) {
    return "Congrats! You won!";
  } else {
    return "Unlucky. The computer's won this round.";
  }
}

game();
console.log(whoWon());
// for (i = 0; i > 5; i++) {

// }
