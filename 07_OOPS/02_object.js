/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

function multipleBy5(num){

    return num*5
}

multipleBy5.apply.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);


console.log(multipleBy5.prototype);  // Every function in JavaScript has a 'prototype' property, which is used for inheritance

// Now we define a constructor function 'createUser' that acts as a template for creating new user objects
function createUser(username, price) {
    // 'this' refers to the new object being created and assigns 'username' and 'price' as properties of that object
    this.username = username;
    this.price = price;
}

// Adding a method 'printme' to the prototype of 'createUser'
// This method can be called on any object created by 'createUser'
createUser.prototype.printme = function() {
    // This method logs the username and price of the tea
    console.log(`Name of Tea is ${this.username} and its price is ${this.price}`);  
};

// Adding another method 'increment' to the prototype of 'createUser'
createUser.prototype.increment = function() {
    return this.price += 10;  
};

// Now we create three instances (objects) of 'createUser' using the 'new' keyword

let chai1 = new createUser("Masala chai", 30);  
let chai2 = new createUser("Black Tea", 20);    
let chai3 = new createUser("Green Tea", 140);   

// Explanation of what happens when 'new' is used:
// - A new empty object is created
// - The prototype of this new object is set to 'createUser.prototype'
// - 'this' inside the constructor function refers to the new object, and properties/methods are added to it
// - The constructor function (in this case 'createUser') is called with the new object


console.log(chai2.printme());  // This will print: "Name of Tea is Black Tea and its price is 20"


console.log(`price of tea is increased now its price is ${chai1.increment()} `);  // This will print: "price of tea is increased now its price is 40"