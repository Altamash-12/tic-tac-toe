const boxes = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".reset");
let turnPlayer = document.querySelector(".turn-player");

let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let winner = "";
let currentTurn = "X";
let boxArray = [null, null, null, null, null, null, null, null, null];
let winningScore = null;

const checkWinner = (arr) => {
  for (let i = 0; i < winConditions.length; i++) {
    if (
      arr[winConditions[i][0]] &&
      arr[winConditions[i][0]] === arr[winConditions[i][1]] &&
      arr[winConditions[i][1]] === arr[winConditions[i][2]]
    ) {
      winner = currentTurn;
    }
  }

  if (winner) {
    boxes.forEach((box) => {
      box.disabled = true;
    });
  }

  return winner;
};

boxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    e.target.value = currentTurn;
    e.target.disabled = true;
    e.target.textContent = currentTurn;
    boxArray[e.target.id] = currentTurn;

    if (checkWinner(boxArray)) {
      turnPlayer.textContent = `${currentTurn} won the game`;
    } else {
      currentTurn = currentTurn === "X" ? "O" : "X";
      turnPlayer.textContent = `its ${currentTurn} turn`;
    }
  });
});

resetBtn.addEventListener("click", function (e) {
  boxes.forEach((box) => {
    box.textContent = "";
    box.value = "";
    box.disabled = false;
  });
  currentTurn = "X";
  turnPlayer.textContent = "its X turn";
  isGameEnd = false;
});
