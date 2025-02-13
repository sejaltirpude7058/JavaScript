// there are two types of datatypes
//1. primitive datatype 
//2. non primitive datatype
// diffrence  ki ye jo data h vo kis tarah se memory me store hote hai or kis trh se ap apne data ko acces kr sakte ho
// if asked int interview whar is primitive nad nonprimitive
//ans -> kis trh se data ko memory me store or access kiya jata h us basis pr data k 2 categorizations hote h 

//1. primitive datatype 
// primitive datatypes are passed by value 
//Number, String, Boolean,  null, undefined, symbol, bigInt total 7 datatypes come under primitive

/*
Difference Between Primitive and Non-Primitive Data Types in JavaScript

Feature	                      Primitive Data Types	                Non-Primitive Data Types
Definition	                  Stores a single value directly	    Stores a reference to a memory location
Mutability	                  Immutable (cannot be changed)	        Mutable (can be modified)
Stored in	                  Stack Memory	                        Heap Memory
Comparison	                  Compared by value	                    Compared by reference
Example	let a = 10; let b = a;                                      let obj1 = {x: 10}; let obj2 = obj1;
(b remains 10 even if a changes)                                    (changing obj2 also changes obj1)
	


Primitive Data Types in JavaScript
Primitive types hold only a single value and are immutable.

Number →      let num = 10;
String →      let name = "Sejal";
Boolean →     let isAvailable = true;
Undefined →   let x;
Null →        let y = null;
Symbol →      let sym = Symbol("id");
BigInt →      let bigNum = 123n;


Non-Primitive Data Types in JavaScript
Non-primitive types hold references to memory locations and are mutable.

Object →     let person = {name: "Sejal", age: 22};
Array →      let fruits = ["apple", "banana", "mango"];
Function →   function greet() { return "Hello!"; }
Date →       let today = new Date();
RegExp →     let pattern = /hello/g;

*/



const id = Symbol('123');
const anotherId = Symbol('123');
 // every symbol is unique
const check =  (id === anotherId);
console.log(check) //false

// we just need to add n at the last of our number to make it bigint
let bigNumber = 123456788888888888888765432n;

//2. non primitive datatype
//reference (non primitive)
// datatypes who comes under non primitive inka refrence directly allocate kiya ja sakta hai
//objects, array, functions

//array
const myArray = [1,2,3,4,5,6,7];
//onject
const myObj = {
    name : 'sejal',
    age : 22,
    gender : 'female',
}
//functions

let myNull = null;
console.log(typeof myNull); //object

function myFunction(){
    console.log("hello i'm function n will only be execute whenever you will call me😉");
};
myFunction();
console.log(typeof myFunction);


//is JavaScript dynamic or static language
// ->JavaScript is a dynamically typed language. Because data type will automatically assigned at
// the time of compilation or code execution


