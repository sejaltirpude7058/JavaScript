// Arithmetic operators perform arithmetic on numbers (literals or variables).

// Operator
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation 
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

let x = 2
let y = 5

console.log("addition", x+y)
console.log("subtraction", x-y)
console.log("multiplication", x*y)
console.log("exponention", x**y)
console.log("division", x/y)
console.log("modulo", x%y)
console.log("increment", x++)
console.log("decrement", y--)


let n = "Sejal"
let s = " Tirpude"
console.log(n+s);
console.log("1" + 2); //12
console.log(1 + "2") //12
console.log(1 + 2 + "3") //33
console.log("2" + 3 + 2) //232 should always avoid such type of syntax
let a = 56; //number (2 to the power 53)
let b = 4.5; // number
let c = true; // boolean
let d = "Sejal"; // string
let e = 1234596786789n; // bigInt number
let f = null; // object
let g; //undefined

console.log(+true) //1
console.log(+"") //0 

// //datatypes
console.log(a,typeof(a));
console.log(b,typeof(b));
console.log(c,typeof(c));
console.log(d,typeof(d));
console.log(e,typeof(e));
console.log(f,typeof(f));
console.log(g,typeof(g));


// //Comparison operators
console.log(2 > 1); //true
console.log(2 >= 1);//true
console.log(2 < 1);// false
console.log(2 <= 1);// flase
console.log(2 !=  1);// true
console.log( 2 == 1);// false

console.log("2" > 1) // output will come true coz javascript has automatically converted our string
// // into number but its not a good practice and make sure always use same datatype value

console.log(null > 0) //false
console.log(null >= 0) //true
console.log(null==0) //false
 /*
 the reason is that an equallity check == and comparison >= > < <= works diffrently
 comparison will convert null to a number, treating it as 0;
 */

 // === operator strictly check the value as well as the datatype of the value
 console.log("2" == 2)// true
 console.log("2" === 2) // false string and number are diffrent datatypes

 console.log(undefined == 0 );
 console.log( undefined > 0);
 console.log(undefined < 0);