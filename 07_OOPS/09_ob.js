// /**
//  *Object.getOwnPropertyDescriptor:

// This method returns a descriptor object with attributes like value, writable, enumerable, and configurable. It shows how the property behaves (whether it can be modified, iterated over, etc.).
// writable:

// If writable is false, you can't change the property's value. For example, Math.PI has writable: false, so its value cannot be changed.
// enumerable:

// If enumerable is true, the property will show up in loops such as for-in or Object.entries(). If it's false, the property will be hidden in these iterations.
// Object.defineProperty:

// This method allows you to change or define a property descriptor for an object. Here, we made the name property of the chai object non-writable, meaning it cannot be reassigned after being defined
//  */




// // Getting the property descriptor of 'PI' on the Math object
// // 'Object.getOwnPropertyDescriptor' allows you to view the properties' attributes like
// // 'writable', 'enumerable', 'configurable', and 'value'.
// const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter); 
// // Output: { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }
// // This tells us that 'PI' is non-writable, non-enumerable, and non-configurable, 
// // meaning you cannot change or iterate over it, and it cannot be redefined.

// // Trying to modify the value of Math.PI (which is not writable)
// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5; // Since 'writable' is false, this line won't change Math.PI
// console.log(Math.PI); // 3.141592653589793 (unchanged)

// // Defining a new object 'chai' with some properties and a method
// const chai = {
//     name: 'ginger chai', // Initial name value
//     price: 250,          // Price of the chai
//     isAvailable: true,   // Availability of chai

//     // Method to order chai
//     orderChai: function(){
//         console.log("chai nhi bni"); // Message when chai is ordered
//     }
// }

// // Getting the property descriptor of the 'name' property in the 'chai' object
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// // Output: { value: 'ginger chai', writable: true, enumerable: true, configurable: true }
// // This tells us that 'name' is writable, enumerable, and configurable by default.

// // Using 'Object.defineProperty' to modify the descriptor of 'name'.
// // Setting 'writable: false' means we can no longer change the value of 'name'.
// Object.defineProperty(chai, 'name', {
//     writable: false, // Now 'name' is read-only (cannot be changed)
//     enumerable: true, // Still enumerable (will show up in for-in or Object.entries loops)
// })

// // Checking the new descriptor of 'name' after modification
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// // Output: { value: 'ginger chai', writable: false, enumerable: true, configurable: true }
// // Now 'writable' is false, so 'name' can't be modified.

// // Looping over the 'chai' object and printing its properties
// // Using 'Object.entries' to get key-value pairs
// // Filtering out methods (functions) and logging only properties that are not functions
// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') { 
//         // Only print properties (not functions)
//         console.log(`${key} : ${value}`);
//     }
// }
// // Output:
// // name : ginger chai
// // price : 250
// // isAvailable : true




