let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePoint = document.querySelector("#user-score");
const compScorePoint = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePoint.innerText = userScore;
    console.log("you win!");
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePoint.innerText = compScore;
    console.log("you lose");
    msg.innerText = "You Lose.";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ",userChoice);
  const compChoice = genCompChoice();
  console.log("computer choice = ",compChoice);

  if (userChoice === compChoice){
    console.log("game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "rgb(12, 12, 52)";
  } else {
    let userWin = true;
    if (userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true ; 
    } 
    else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true ;
    } 
    else {
      userWin = compChoice === "rock" ? false : true ;
    };
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});