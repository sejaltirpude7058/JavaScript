let myUsers = {
    id : 1,
    name : "Sejal ",
    branch : 'ETC',
    skills : ["C++", "Java", "JavaScript"]
}


let myArr = [1,2,3,4,5,6,7];

// Adding a custom method 'anyMethod' to the Object prototype
// This method can be accessed by any object (since all objects inherit from the Object prototype)
Object.prototype.anyMethod = function(){
    // Using 'this.name' to refer to the 'name' property of the object calling this method
    console.log(`hey My name is ${this.name} i work for all objects`); 
    // This will output a message using the object's name property
}

// Adding a custom method 'forArr' to the Array prototype
// This method will only work for arrays, as it is added to the Array prototype
Array.prototype.forArr = function(){
    console.log(` i work for only arrays`); 
    // This will output a message specific to arrays
}


let str = "Sejal";

// Adding a custom method 'myString' to the String prototype
// This method will only work for string objects
String.prototype.myString = function(){
    console.log(`i work only for strings`);
    // This method outputs a message saying it works only for strings
}

// The following lines are commented out but demonstrate how you would call these methods on different objects:

// myUsers.anyMethod();  // Calls the 'anyMethod' on the myUsers object (prints the user's name)
// myArr.forArr();  // Calls the 'forArr' on myArr (since it's an array, it works)
// str.myString();  // Calls 'myString' on str, since 'str' is a string, this will work

//  shows how 'anyMethod' can work on arrays and strings due to inheritance:
// myArr.anyMethod();  // This will also work since arrays inherit from Object, but it won't call 'forArr'
// str.anyMethod();  // This works too, as strings inherit from Object

// Inheritance Example:


const User = {
    name: "chai",  
    email: "chai@google.com"  
}


const Teacher = {
    makeVideo: true 
}


const TeachingSupport = {
    isAvailable: false  
}

// Creating a 'TASupport' object with its own properties
// Also, setting its prototype to 'TeachingSupport' using __proto__
const TASupport = {
    makeAssignment: 'JS assignment',  
    fullTime: true,  
    __proto__: TeachingSupport  // Inheriting properties from TeachingSupport
}

// Manually setting 'Teacher' object to inherit from 'User' object using __proto__
Teacher.__proto__ = User;

// The following commented line would print 'chai' since Teacher now inherits from User's 'name' property
// console.log(Teacher.name);

// Using Object.setPrototypeOf to set the prototype for Teacher
// This is an alternative method to __proto__, it takes two parameters:
// 1. The object whose prototype is being set (Teacher)
// 2. The object that will become the prototype (TeachingSupport)
Object.setPrototypeOf(Teacher, TeachingSupport);


// Now that Teacher inherits from TeachingSupport, it should print 'false'
console.log(Teacher.isAvailable);

// Demonstrating another example with strings:

let myName = "Jhon Doe";  // A string 'myName' is created

// Adding a custom method 'trueLength' to the String prototype
// This method will calculate and log the length of the string without leading or trailing spaces
String.prototype.trueLength = function(){
    console.log(this);  // 'this' refers to the current string object
    console.log(this.trim().length);  
}

// Calling the 'trueLength' method on 'myName'
myName.trueLength();  // This will log the trimmed version of 'myName' and its length

// Calling 'trueLength' on the string 'Sejal'
"Sejal".trueLength();  // This works because we're adding this method to all string objects