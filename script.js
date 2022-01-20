let boxes = document.querySelectorAll("#main div");
let gameActive = true;
let gameRestart = document.querySelector("button");
let gameStatus = document.getElementById("gameStatus");

const winMessageX = () => `Player X has won!`;
const winMessageO = () => `Player O has won!`;
function createElements(){
for (let i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    if (this.innerHTML === "X" || this.innerHTML === "O") {
      return;
    }
    if (gameActive) {
      this.innerHTML = "X";
      gameActive = false;
    } else {
      this.innerHTML = "O";
      gameActive = true;
    }
    winMessage();
  };
}
}
createElements();

function winMessage() {
  if (
    boxes[0].innerHTML === "X" &&
    boxes[1].innerHTML === "X" &&
    boxes[2].innerHTML === "X"
  ) {
    boxes[0].style.backgroundColor = "green";
    boxes[1].style.backgroundColor = "green";
    boxes[2].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageX();
    gameStop();
  }
  if (
    boxes[3].innerHTML === "X" &&
    boxes[4].innerHTML === "X" &&
    boxes[5].innerHTML === "X"
  ) {
    boxes[3].style.backgroundColor = "green";
    boxes[4].style.backgroundColor = "green";
    boxes[5].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageX();
    gameStop();
  }
  if (
    boxes[6].innerHTML === "X" &&
    boxes[7].innerHTML === "X" &&
    boxes[8].innerHTML === "X"
  ) {
    boxes[6].style.backgroundColor = "green";
    boxes[7].style.backgroundColor = "green";
    boxes[8].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageX();
    gameStop();
  }
  if (
    boxes[0].innerHTML === "X" &&
    boxes[3].innerHTML === "X" &&
    boxes[6].innerHTML === "X"
  ) {
    boxes[0].style.backgroundColor = "green";
    boxes[3].style.backgroundColor = "green";
    boxes[6].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageX();
    gameStop();
  }
  if (
    boxes[1].innerHTML === "X" &&
    boxes[4].innerHTML === "X" &&
    boxes[7].innerHTML === "X"
  ) {
    boxes[1].style.backgroundColor = "green";
    boxes[4].style.backgroundColor = "green";
    boxes[7].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageX();
    gameStop();
  }
  if (
    boxes[2].innerHTML === "X" &&
    boxes[5].innerHTML === "X" &&
    boxes[8].innerHTML === "X"
  ) {
    boxes[2].style.backgroundColor = "green";
    boxes[5].style.backgroundColor = "green";
    boxes[8].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageX();
    gameStop();
  }
  if (
    boxes[0].innerHTML === "X" &&
    boxes[4].innerHTML === "X" &&
    boxes[8].innerHTML === "X"
  ) {
    boxes[0].style.backgroundColor = "green";
    boxes[4].style.backgroundColor = "green";
    boxes[8].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageX();
    gameStop();
  }
  if (
    boxes[2].innerHTML === "X" &&
    boxes[4].innerHTML === "X" &&
    boxes[6].innerHTML === "X"
  ) {
    boxes[2].style.backgroundColor = "green";
    boxes[4].style.backgroundColor = "green";
    boxes[6].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageX();
    gameStop();
  }

  if (
    boxes[0].innerHTML === "O" &&
    boxes[1].innerHTML === "O" &&
    boxes[2].innerHTML === "O"
  ) {
    boxes[0].style.backgroundColor = "green";
    boxes[1].style.backgroundColor = "green";
    boxes[2].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageO();
    gameStop();
  }
  if (
    boxes[3].innerHTML === "O" &&
    boxes[4].innerHTML === "O" &&
    boxes[5].innerHTML === "O"
  ) {
    boxes[3].style.backgroundColor = "green";
    boxes[4].style.backgroundColor = "green";
    boxes[5].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageO();
    gameStop();
  }
  if (
    boxes[6].innerHTML === "O" &&
    boxes[7].innerHTML === "O" &&
    boxes[8].innerHTML === "O"
  ) {
    boxes[6].style.backgroundColor = "green";
    boxes[7].style.backgroundColor = "green";
    boxes[8].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageO();
    gameStop();
  }
  if (
    boxes[0].innerHTML === "O" &&
    boxes[3].innerHTML === "O" &&
    boxes[6].innerHTML === "O"
  ) {
    boxes[0].style.backgroundColor = "green";
    boxes[3].style.backgroundColor = "green";
    boxes[6].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageO();
    gameStop();
  }
  if (
    boxes[1].innerHTML === "O" &&
    boxes[4].innerHTML === "O" &&
    boxes[7].innerHTML === "O"
  ) {
    boxes[1].style.backgroundColor = "green";
    boxes[4].style.backgroundColor = "green";
    boxes[7].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageO();
    gameStop();
  }
  if (
    boxes[2].innerHTML === "O" &&
    boxes[5].innerHTML === "O" &&
    boxes[8].innerHTML === "O"
  ) {
    boxes[2].style.backgroundColor = "green";
    boxes[5].style.backgroundColor = "green";
    boxes[8].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageO();
    gameStop();
  }
  if (
    boxes[0].innerHTML === "O" &&
    boxes[4].innerHTML === "O" &&
    boxes[8].innerHTML === "O"
  ) {
    boxes[0].style.backgroundColor = "green";
    boxes[4].style.backgroundColor = "green";
    boxes[8].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageO();
    gameStop();
  }
  if (
    boxes[2].innerHTML === "O" &&
    boxes[4].innerHTML === "O" &&
    boxes[6].innerHTML === "O"
  ) {
    boxes[2].style.backgroundColor = "green";
    boxes[4].style.backgroundColor = "green";
    boxes[6].style.backgroundColor = "green";
    gameStatus.innerHTML = winMessageO();
    gameStop();
  }
}

function gameStop() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = false;
  }
}

gameRestart.onclick = function () {
  gameActive = true;
  createElements();
  gameStatus.innerHTML = "";
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].style.backgroundColor = "white";
  }
  let welcomeMessage = document.querySelector(".section1");
  welcomeMessage.style.display = "flex";
  let board = document.querySelector(".section2");
  board.style.display = "none";
};

function playPick() {
  let x=document.querySelector("#butX")
  let o=document.querySelector("#butO")
  if (x.style.backgroundColor === "rgb(0, 51, 138)" || o.style.backgroundColor === "rgb(0, 51, 138)") {
    let board = document.querySelector(".section2");
    board.style.display = "flex";
    let welcomeMessage = document.querySelector(".section1");
    welcomeMessage.style.display = "none";
  }
}

function pickX() {
  let x = document.querySelector("#butX");
  x.style.backgroundColor = "#00338a";
  if ((x.style.backgroundColor === "rgb(0, 51, 138)")) {
    let o = document.getElementById("butO");
    o.style.backgroundColor = "#0e7fac";
  }

}
function pickO(){
  let o = document.getElementById("butO");
    o.style.backgroundColor = "#00338a";
    if (o.style.backgroundColor === "rgb(0, 51, 138)") {
    let x = document.querySelector("#butX");
    x.style.backgroundColor = "#0e7fac";
    }
    gameActive=false;
}

