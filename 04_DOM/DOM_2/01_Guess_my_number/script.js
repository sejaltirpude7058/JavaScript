"use strict";

/**
 * What is DOM?
 * DOM stands for Document Object Model.
 * It is a structured representation of the HTML document, allowing JavaScript to access HTML elements and styles to manipulate them.
 *
 * DOM is not part of JavaScript itself.
 * DOM properties and methods are actually part of the Web APIs.
 * Web APIs are like libraries that browsers implement, which we can access from our JavaScript code.
 *
 * API stands for Application Programming Interface.
 * APIs are libraries, also written in JavaScript, that are automatically available for us to use — all this happens behind the scenes.
 * We do not have to import or set up anything.
 */

// Shortcut for emoji (Windows + .) in VS Code

// Selecting necessary DOM elements
let number = document.querySelector(".number");
let check = document.querySelector(".check");

// Generate a secret number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100 + 1);

// Initial game score
let moves = 10;
let score = 100;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

// Event listener for the "check" button
check.addEventListener("click", function (e) {
  // Get the player's guessed number and convert it to a Number type
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // Validate guess input and provide feedback
  if (!guess) {
    // When no number is entered
    displayMessage("⚠️ Enter a valid number");
  } else if (guess >= 101) {
    // When the guessed number is above the range
    displayMessage("⚠️ Number should be between 1 to 100");
  } else if (guess < 0) {
    // When the guessed number is below the range
    displayMessage("⚠️ Number should be between 1 to 100");
  } else if (guess === secretNumber) {
    // When the guessed number is correct
    displayMessage("🎉 Yahoo! Correct Number");
    number.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347"; // Change background to green on a correct guess

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //When the guess is wrong
  else if (guess !== secretNumber) {
    if (moves > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too low");
      moves--; // Decrease moves
      document.querySelector(".moves").textContent = moves;
      score -= 10;
      document.querySelector(".score").textContent = score;
    } else {
      number.textContent = secretNumber;
      displayMessage("😢 You lost the game");
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

//restart the game
document.querySelector(".again").addEventListener("click", function (e) {
  console.log(e.target);

  moves = 10;

  secretNumber = Math.floor(Math.random() * 100 + 1);

  document.querySelector(".moves").textContent = moves;
  score = 100;
  document.querySelector(".score").textContent = score;
  //document.querySelector(".message").textContent = "🤔 Start guessing....";
  displayMessage("🤔 Start guessing....");
  document.querySelector("body").style.backgroundColor = "#222";
  number.textContent = "?";
  document.querySelector(".guess").value = "";
});
