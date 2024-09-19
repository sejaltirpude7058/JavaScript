const mynum =  new Number(2300);
const num = 3.1415;
console.log(mynum); //[Number: 2300]
console.log(num);// 3.1415

console.log(mynum.toExponential(1));//2.3e+3
console.log(mynum.toFixed(2)) // 2300.00
console.log(mynum.toPrecision(3)) // 2.30e+3
console.log(mynum.toLocaleString('en-IN'));//Converts a number to a string by using the current or specified locale.

console.log(num.toString());

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