"use strict";

const rollDice = document.querySelector(".btn--roll");
let zeroCurrent = document.querySelector("#current--0");
let firstCurrent = document.querySelector("#current--1");
let numzero = +0;
let numfirst = +0;
let zeroScore = document.querySelector("#score--0");
let firstScore = document.querySelector("#score--1");
const player0Sec = document.querySelector(".player--0");
const player1Sec = document.querySelector(".player--1");
const hold = document.querySelector(".btn--hold");
let img = document.querySelector(".dice");

const holdF = function () {
  player0Sec.classList.toggle("player--active");
  player1Sec.classList.toggle("player--active");
};

const randomNum = function (num) {
  return (num = Math.trunc(Math.random() * 6) + 1);
};

rollDice.addEventListener("click", function () {
  randomNum;
  img.classList.remove("hidden");
  if (player0Sec.classList.contains("player--active")) {
    zeroCurrent.textContent = randomNum();
    if (zeroCurrent.textContent == 1) {
      numzero = 0;
      img.src = `dice-${zeroCurrent.textContent}.png`;
      zeroCurrent.textContent = 0;
      zeroScore.textContent = 0;
      holdF();
    } else {
      img.src = `dice-${zeroCurrent.textContent}.png`;
      numzero += Number(zeroCurrent.textContent);
    }
  } else {
    firstCurrent.textContent = randomNum();
    if (firstCurrent.textContent == 1) {
      img.src = `dice-${firstCurrent.textContent}.png`;
      numfirst = 0;
      firstCurrent.textContent = 0;
      firstScore.textContent = 0;
      holdF();
    } else {
      img.src = `dice-${firstCurrent.textContent}.png`;
      numfirst += Number(firstCurrent.textContent);
    }
  }
});

hold.addEventListener("click", function () {
  holdF();
  zeroScore.textContent = numzero;
  firstScore.textContent = numfirst;
});

const reset = document.querySelector(".btn--new");

reset.addEventListener("click", function () {
  zeroCurrent.textContent = 0;
  firstCurrent.textContent = 0;
  zeroScore.textContent = 0;
  firstScore.textContent = 0;
  numzero = +0;
  numfirst = +0;
  img.classList.add("hidden");
  if (player0Sec.classList.contains("player--active")) {
    console.log("is correct");
  } else {
    holdF();
  }
});
