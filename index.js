function getComputerChoice() {
  const gameArray = ["Rock", "Paper", "Sissors"];
  const computerChoice = gameArray[~~(Math.random() * gameArray.length)];
  return computerChoice;
}

// function getPlayerChoice() {
//   const playerSelection = prompt("Choose wisely!");
//   return playerSelection;
// }

// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  console.log(
    "You lose! " + `${computerSelection}` + " beats " + `${playerSelection}`
  );
}

playRound(playerSelection, computerSelection);
