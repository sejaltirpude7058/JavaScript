/**
 * Primitive datatypes -> pass by value
 * String
 * Number
 * Boolean
 * bigInt
 * undefined
 * null
 * Symbol
 * 
 * Non Primitive datatypes -> pass by reference
 * objects 
 * arrays
 * functions
 * 
 */

//typeof -> to know datatype of variable declared

let username = "Atilisha"; //Stirng
let age = 23;   //Number
let isLoggedIn = true; //boolean
let salary = 12346543423n; //bigInt
let address;  //undefined
let meetings = null; //null

//object -> datatype object
let student ={
   name : "sudhanshu",
   class : 10,
}

//array -> datatype object
let myArr = [1,2,3,4,5,6];

//function -> datatype object
let greeting = function(){
    console.log(`Good Morning!!`);
    
}
greeting();

console.log(typeof salary);
console.log(typeof address);
console.log(typeof myArr);

