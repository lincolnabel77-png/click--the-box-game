let score = 0;
let gameArea = document.getElementById("game-area");
let scoreDisplay = document.getElementById("score");
let startBtn = document.getElementById("start-btn");
let boxInterval;

startBtn.addEventListener("click", startGame);

function startGame() {
  score = 0;
  scoreDisplay.textContent = score;
  boxInterval = setInterval(spawnBox, 1000);
}

function spawnBox() {
  let box = document.createElement("div");
  box.classList.add("box");

  // random position
  let x = Math.random() * (gameArea.clientWidth - 50);
  let y = Math.random() * (gameArea.clientHeight - 50);
  box.style.left = x + "px";
  box.style.top = y + "px";

  box.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    gameArea.removeChild(box);
  });

  gameArea.appendChild(box);

  // remove box after 1 second if not clicked
  setTimeout(() => {
    if (gameArea.contains(box)) {
      gameArea.removeChild(box);
    }
  }, 1000);
}
