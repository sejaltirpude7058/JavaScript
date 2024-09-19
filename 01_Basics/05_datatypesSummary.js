// there are two types of datatypes
//1. primitive datatype 
//2. non primitive datatype
// diffrence  ki ye jo data h vo kis tarah se memory me store hote hai or kis trh se ap apne data ko acces kr sakte ho
// if asked int interview whar is primitive nad nonprimitive
//ans -> kis trh se data ko memory me store or access kiya jata h us basis pr data k 2 categorizations hote h 

//1. primitive datatype 
// primitive datatypes are passed by value 
//Number, String, Boolean,  null, undefined, symbol, bigInt total 7 datatypes come under primitive

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


//is JavaScript dynamic or static language
// ->JavaScript is a dynamically typed language. Because data type will automatically assigned at
// the time of compilation or code execution


