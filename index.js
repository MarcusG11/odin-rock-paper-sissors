let userScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const gameArray = ["rock", "paper", "scissors"];
  const computerChoice = gameArray[~~(Math.random() * gameArray.length)];
  return computerChoice;
}

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
  let playerSelection = "rock";
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  scoreKeeper(userScore, computerScore);
  currentScore();
});

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
  let playerSelection = "paper";
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  scoreKeeper(userScore, computerScore);
  currentScore();
});

const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  scoreKeeper(userScore, computerScore);
  currentScore();
});

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

function scoreKeeper(userScore, computerScore) {
  const logScore = document.querySelector(".running-score");
  logScore.innerHTML = `User Score = ${userScore} Computer Score = ${computerScore}`;
}

function currentScore() {
  if (userScore == 5 || computerScore == 5) {
    whoWon();
  }
}

function whoWon() {
  const logWinner = document.querySelector(".winOrLoss");
  const goNext = document.querySelector(".playAgain");
  const btn = document.createElement("button");
  goNext.append(btn);
  btn.textContent = "Play Again?";
  btn.addEventListener("click", () => {
    (userScore = 0), (computerScore = 0);
    scoreKeeper(userScore, computerScore);
    // goNext.remove(btn);
  });
  if (userScore > computerScore) {
    logWinner.innerHTML = "Congrats! You won!";
  } else {
    logWinner.innerHTML = "Unlucky. The computer's won this round.";
  }
}
