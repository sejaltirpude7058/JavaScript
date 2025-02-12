"use strict";

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

//Selecting Buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//selecting both players
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//setting initial values to 0;
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add("hidden");

// const score = [0, 0]; //index 0 player1 // index 1 player2
// let dice = 0;
// let playing = true;
// let currentScore = 0;
// let activePlayer = 0; // i.e active player is player1 initially

let score, playing, currentScore, activePlayer;

function init() {
  score = [0, 0]; //index 0 player1 // index 1 player2
  playing = true;
  currentScore = 0;
  activePlayer = 0; // i.e active player is player1 initially

  //setting initial values to 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
}
init();

function switchPlayer() {
  // changing the activeplayer if the active player is 0 (player1) change to active player 1 (player2) or vice versa
  //Switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  //toggle -> it will add the class if its not there and remove the class if its already there
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

btnRoll.addEventListener("click", function (e) {
  if (playing) {
    //   console.log(e.target);

    let dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);

    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove("hidden");

    if (dice !== 1) {
      //add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    //add currentscore to the active players score
    score[activePlayer] = currentScore;
    //score[1] = score[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //check if the players score is >=100
    if (score[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }
    // else {
    //   //switch to the next player
    //   switchPlayer();
    // }
  }
});

btnNew.addEventListener("click", init);
