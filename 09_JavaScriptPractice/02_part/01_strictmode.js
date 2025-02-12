"use strict";
/*
strict mode is a special mode that we can activate in javascript which makes it easier for us to 
wrtie secure javascript code always put strict mode at the beginning of your scripts and like that
 write more secure code
strict mode makes it easier for us developers to avoid accidental errors so basically it helps us 
introduce the bugs into our code strict mode forbids us to do certain things and it will actually
 create visible errors for us in certain situations in which without strict mode javascript will 
 simply fail silently without letting us know that we did a mistake
*/

//function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

let fruitProcesser = function (apples, oranges) {
  let applePieces = cutFruitPieces(apples);
  let orangePieces = cutFruitPieces(oranges);
  let juice = `juice with ${applePieces} apple pieces🍎 and ${orangePieces} oranges piecies🟠 `;
  return juice;
};

let appleJuice = fruitProcesser(5, 0);
console.log(appleJuice);

let appleOrangeJuice = fruitProcesser(3, 4);
console.log(appleOrangeJuice);

//arrow functions

const myAge = (birthYear, currentYear) => {
  return currentYear - birthYear;
};
console.log(myAge(2001, 2024));

let age = (birthYear) => 2024 - birthYear;
console.log(age(2003));
