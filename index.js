const paper = document.getElementById("paper")
const rock = document.getElementById("rock")
const scssior = document.getElementById("scissors")
const userscore = document.getElementById("user_score")
const compscore = document.getElementById("comp_score");
const text = document.getElementById("text")
const black = document.getElementById('body')
const playagain = document.getElementById('playagain')

let round = prompt("How many round in game");
let drawScore = 0;
let userScore = 0;
let computerscore = 0;
let currentRound = 0;


// computer function random Number
function comp() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "r"
  }
  else if (computerChoice === 1) {
    return "s"
  }
  else if (computerChoice === 2) {
    return "p"
  }
}


// choice for user and computer
function userComputer(userChoice) {
  let computerChoice = comp();

  if (userChoice === "p" && computerChoice === "p") {
    drawScore++;
    console.log("draw")
  }
  else if (userChoice === "r" && computerChoice === "r") {
    drawScore++;
    console.log("draw")
  }
  else if (userChoice === "s" && computerChoice === "s") {
    drawScore++;
    console.log("draw")
  }
  else if (userChoice === "p" && computerChoice === "r") {
    userScore++;
    console.log("user Win")
  }
  else if (userChoice === "p" && computerChoice === "s") {
    computerscore++;
    console.log("computer Win")
  }
  else if (userChoice === "r" && computerChoice === "p") {
    computerscore++;
    console.log("computer Win")
  }
  else if (userChoice === "s" && computerChoice === "p") {
    userScore++;
    console.log("user Win")
  }
  else if (userChoice === "s" && computerChoice === "r") {
    computerscore++;
    console.log("computer Win")
  }
  else if (userChoice === "r" && computerChoice === "s") {
    userScore++;
    console.log("user Win")
  }

  document.getElementById("user_score").innerHTML = userScore;
  document.getElementById("comp_score").innerHTML = computerscore;


  currentRound++;
  if (currentRound >= round) {
    endgame();
  }
}


paper.addEventListener("click", function () {
  userComputer("p");
})

rock.addEventListener("click", function () {
  userComputer("r");
})

scssior.addEventListener("click", function () {
  userComputer("s");
})


function endgame() {
  if (userScore > computerscore) {
    text.style.color = "white"
    text.style.backgroundColor = "green"
    text.style.width = "250px"
    text.style.paddingTop = "20px"
    text.textContent = "You win the game"
    black.style.display = "block"
  }
  else if (computerscore > userScore) {
    text.style.color = "white"
    text.style.backgroundColor = "red"
    text.style.width = "350px"
    text.textContent = "Computer win the game"
    black.style.display = "block"
  }
  else {
    text.style.color = "white"
    text.style.backgroundColor = "blue"
    text.style.width = "80px"
    text.style.marginLeft = "680px"
    text.textContent = "Draw"
    black.style.display = "block"
  }
  reset();
}


black.style.display = "none"
playagain.addEventListener("click", function () {
  window.location.reload()

})

function reset() {
  userScore = 0;
  computerscore = 0;
  currentRound = 0;
  document.getElementById('user_score').innerHTML = userScore;
  document.getElementById("comp_score").innerHTML = computerscore;
}