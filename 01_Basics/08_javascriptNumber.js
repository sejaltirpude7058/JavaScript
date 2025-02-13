const mynum =  new Number(2300);
const num = 3.1415;
console.log(mynum); //[Number: 2300]
console.log(num);// 3.1415

console.log(mynum.toExponential(1));//2.3e+3
console.log(mynum.toFixed(2)) // 2300.00
console.log(mynum.toPrecision(3)) // 2.30e+3
console.log(mynum.toLocaleString('en-IN'));//Converts a number to a string by using the current or specified locale.

console.log(num.toString());


// 1. toExponential()
// Converts a number into exponential (scientific) notation.
// Returns a string with a specified number of decimal places.
// number.toExponential(digits)
// digits (optional) → Number of decimal places (default is full precision).

let numb = 12345.6789;
console.log(numb.toExponential());    // "1.23456789e+4" (default)
console.log(numb.toExponential(2));   // "1.23e+4" (2 decimal places)
console.log(numb.toExponential(5));   // "1.23457e+4" (5 decimal places)


// 2. toPrecision()
// Formats a number to a specified total number of significant digits.
// Returns a string.

// number.toPrecision(digits)
// digits → Total number of significant figures (including before and after the decimal).

let numbe = 12345.6789;
console.log(numbe.toPrecision(4));  // "1.235e+4" (4 significant digits)
console.log(numbe.toPrecision(6));  // "12345.7" (6 significant digits)
console.log(numbe.toPrecision(10)); // "12345.67890" (10 significant digits)


// 1. toLocaleString()
// Converts a number or date into a localized string format based on the user's locale.
// Useful for formatting currency, dates, and numbers according to different locales.

// number.toLocaleString(locale, options)
// locale (optional) → Specifies the language ("en-US", "hi-IN", etc.).
// options (optional) → Customizes formatting (currency, decimal places, etc.).

// let num = 1234567.89;
// console.log(num.toLocaleString()); // "1,234,567.89" (default locale)
// console.log(num.toLocaleString("hi-IN")); // "12,34,567.89" (Indian format)
// console.log(num.toLocaleString("en-US", { style: "currency", currency: "USD" })); // "$1,234,567.89"
// console.log(num.toLocaleString("hi-IN", { style: "currency", currency: "INR" })); // "₹12,34,567.89"


// 2. valueOf()
// Returns the primitive value of an object.
// Mostly used internally; rarely needed explicitly.

// object.valueOf()

// console.log(num.valueOf()); // 100 (returns primitive number)
// console.log(typeof num); // "object"
// console.log(typeof num.valueOf()); // "number"
//    Use valueOf() when you need the primitive value of an object.

// 3. toFixed()
// Formats a number to a fixed number of decimal places and returns a string.
// Useful for formatting currency and rounding decimals.

// number.toFixed(digits)
// digits (optional) → Number of decimal places (default is 0).

let numm = 123.456;
console.log(numm.toFixed()); // "123" (default 0 decimals)
console.log(numm.toFixed(2)); // "123.46" (rounds to 2 decimal places)
console.log(numm.toFixed(5)); // "123.45600" (pads with zeroes)

//-----------------------------------------------MATHS----------------------------------------------


console.log(Math.abs(-4));    //4// gives absolute value 4 -> 4 | -6 -> 6
console.log(Math.round(4.6)); //5// gives round value
console.log(Math.ceil(4.2));  //5// gives top round value
console.log(Math.floor(4.8)); //4// gives lower round value
console.log(Math.min(3,5));   //3// gives mininum value
console.log(Math.max(5,10));  //10//gives maximum value
console.log(Math.random());   //it gives value between 0 to 1 i.e any random value between 0 to 1
console.log(Math.floor((Math.random()) * 10 + 1)); // in this formula we are multiplying our random
// value with 10 random value could give 0 also so if we multiplied our value 10 it will come zero
// only so to avoid this we are adding + 1 and we are taking floor (lower round value)

let min = 10;
let max = 50;
console.log(Math.floor((Math.random()) * (max - min + 1) + min)); 