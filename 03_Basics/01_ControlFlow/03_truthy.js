const userName = "sejal@670";
let name = "Sejal"

if(userName){
    console.log(`Welcome, ${name}`);
}else{
    console.log(`Invalid`);
}


//Falsy Values
//"", false, 0, -0, bigint 0n, null, undefined, NaN

//truthy values
//"0", "false", [], {}, " ", function(){}

let users = [];
if(users.length === 0){
    console.log("Array is empty");
}

const myObject = {}

if(Object.keys(myObject).length === 0){
    console.log(`Object is Empty`);
}


//----------------------------------------------------------------------------------------------------------


false == 0 //true
false == "" //true
0 == "" //true

//-------------------------------------------------------------------------------------------------------------------

//Nullish Coalescing operator (??): null undefined
//The nullish coalescing operator (??) in JavaScript is used to provide a default value when a 
//variable is null or undefined. It's like saying, "If this value is null or undefined, use the other
// value."


let myname = null;
let defaultName = myname ?? "Anonymous";
console.log(defaultName); // Output: "Anonymous"

//It is used to avoid errors or unexpected results when variables might be null or undefined, ensuring
// you always have a fallback value.


let myNum;
myNum = null ?? 10; 
console.log(myNum); //10
myNum = undefined ?? 15;
console.log(myNum); //15
myNum = null ?? 10 ?? 15;
console.log(myNum); //10
//nullish Coalescing operator if null value aayi h to uski safty check krta h kyuki null k basis pr
// hoskata h kbhi program work na kre complex function lga dete h vo function ko database call krra h
// vaha se value aari hai agr value aayi h to thik h nhi to null assign krdo us hisab se situation 
//handle krle

//A real-world use of the nullish coalescing operator (??) is in setting default settings for a website or app.

//For example, if a user hasn't chosen a theme (dark or light mode), the website can use a default value:

let userTheme = null;
let theme = userTheme ?? "light"; // If the user hasn't set a theme, use "light" as default

//This ensures the website always has a theme to display, even if the user hasn't set one.


//-----------------------------------------------------------------------------------------------------------------------------

//ternary Operator

const bookPrice = 100;
(bookPrice >= 80) ? console.log(`price of the book is less than 80`) : 
console.log(`price of the book is greater then 80`);