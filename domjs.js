var p1 = document.querySelector("#p1button");
var p2 = document.querySelector("#p2button");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
// let p2 = document.querySelector("button");
// var isPurple = false;

p1.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score >= winningScore) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
    p1Display.textContent = p1Score;
  }
});

p2.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score >= winningScore) {
      gameOver = true;
      p2Display.classList.add("winner");
    }
    p2Display.textContent = p2Score;
  }
});
