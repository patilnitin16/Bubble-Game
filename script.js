//Variables
let rn = 0;
let timer = 60;
let score = 0;

//Functions
function bubble() {
  let cuttler = "";

  for (let i = 1; i <= 119; i++) {
    let rn = Math.floor(Math.random() * 10);
    cuttler += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbottom").innerHTML = cuttler;
}

function seconds() {
  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(".pbottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function hitval() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector(".pbottom").addEventListener("click", function (dets) {
  let clicledval = Number(dets.target.textContent);
  if (clicledval == rn) {
    increaseScore();
    bubble();
    hitval();
  }
});

//Function Calls
seconds();
bubble();
hitval();
