function student(name, cgpa) {
  this.name = name;
  this.cgpa = cgpa;
  this.presenty = function () {
    return `not yet known`;
  };
}

let s1 = new student(`Sejal`, 8.13);

console.log(s1);
console.log(s1.presenty());

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `${this.type} is Hot`;
  };
}

let myTea = new Tea("Lemon Tea");
let myTea_2 = new Tea("Masala Chai");

console.log(myTea.type);
console.log(myTea_2.describe());

function speices(specieName) {
  this.specieName = specieName;
}

speices.prototype.sound = function () {
  return `${this.specieName} Makes a sound`;
};

let dog = new speices(`Dog`);

console.log(dog.sound());

function customer(id, name) {
  if (!new.target) {
    throw new Error(
      "customer functionConstructor should be called each time with new keyword"
    );
  } else {
    this.id = id;
    this.name = name;
  }
}

let mycustomer = new customer(1, `Harsh`);

/*
 
 Code Overview:
This code defines a function customer that creates new customer objects. The function checks if it’s being called with the new keyword (which is important for making new objects). If it’s not called with new, an error is thrown to prevent incorrect usage.

Key Concepts:

new.target:
new.target is used to check whether the function was called using the new keyword. If you call a function with new, it means you're creating a new object from that function.
In this case, the function customer is meant to be called like this: new customer(id, name).
If new.target is undefined, it means the function was called without new.

throw new Error:
The throw new Error part generates an error message and stops the code from running.
In this example, if the function is not called with new, an error is thrown saying: "customer functionConstructor should be called each time with new keyword".
This ensures that the function is used properly to create new customer objects.
Simple Explanation of the Code:
When you call customer(id, name), it checks if new was used.
If you don’t use new, the code throws an error to remind you to always use new when creating a customer.
If you do use new, it assigns id and name to the new customer object being created.
 
 */

//   he target keyword by itself does not exist in JavaScript, but there are related terms that include "target" in their names. Here are a few key uses:

//   1. new.target:
//   This keyword is used inside a constructor function (a function that creates objects) to check whether the function was called with the new keyword.
//   If the function is called with new, new.target will return the constructor (the function name). If the function is called without new, new.target will be undefined.
//   This helps to ensure that the constructor is used properly, as explained in the previous response.
//   Example:

function Example() {
  console.log(new.target);
}

new Example(); // Outputs: Example
Example(); // Outputs: undefined

//   2. event.target:
//   In the context of event handling (like a button click), event.target refers to the DOM element that triggered the event.
//   For example, if you click a button, event.target will refer to the button that was clicked.
//   Example:

// document.querySelector('button').addEventListener('click', function(event) {
//   console.log(event.target); // Logs the button element that was clicked
// });

//   new.target: Used inside a function to check if the function was called with new.
//   event.target: Refers to the HTML element that triggered an event in event handling.
//   Let me know if you were asking about a specific case!

//

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.isEligibleForDrivingLiecense = function () {
  if (this.age >= 18) {
    return `${this.name} is eligible for Driving liecense`;
  } else {
    return `${this.name} is not eligible for Driving liecense`;
  }
};

let p1 = new Person(`Harsh`, 20);

console.log(p1.isEligibleForDrivingLiecense());

let p2 = new Person(`Atharva`, 16);

console.log(p2.isEligibleForDrivingLiecense());

// Array.prototype.prefixSum = function(){
//   let n = this.length;
//   let i=1;
//   while(i<n){
//      this[i] += this[i-1];
//      i++;
//   }
//   return this;
// }

Array.prototype.sumOfArray = function () {
  let sum = 0;
  for (let index of this) {
    sum += index;
  }
  return sum;
};

let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.prefixSum())

console.log(arr.sumOfArray());

String.prototype.removeWhiteSpace = function () {
  return this.trim();
};

let myName = `   Sejal Tirpude   `;

console.log(myName);
console.log(myName.removeWhiteSpace());

Object.prototype.description = function () {
  return `Name of the Student is ${this.name} and he/she completed her/his ${this.qualification} graduation at the age of ${this.age}`;
};

let student_1 = {
  name: `Sejal`,
  qualification: `BTech`,
  age: 22,
};

let student_2 = {
  name: `Harsh`,
  qualification: `Btech`,
  age: 21,
};

console.log(student_2.description());
console.log(student_1.description());
