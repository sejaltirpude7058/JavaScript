"use strict" // treat all js code as newer version

//alert() we are using nodejs, not browser

// generally in javascript we dont have to mention the data type while declaring variables 
//to know the datatype of the variable we use typeof() method;

let myName = "Sejal";
let age = 23;
let email = "sejal.com";
let isLoggedIn = true;
let height = 5.2;

console.log(typeof(myName)); //string 
console.log(typeof(age));    //number => 2 to the power 53
console.log(typeof(isLoggedIn)); //boolean
console.log(typeof(125478521478855441n)); //bigInt


let nam;//undefined
console.log(typeof(nam));
console.log(typeof(null)); //object

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"











