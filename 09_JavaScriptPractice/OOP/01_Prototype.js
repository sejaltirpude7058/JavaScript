let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

//dunder operator ( __ )
console.log(computer);

console.log(`computer`, computer.__proto__);
console.log(lenovo.cpu);

//another methd instead of __proto__ is setPrototypeOf

let generiCar = {
  tyres: 4,
  isAirConditioner: true,
};

let tesla = {
  functionality: "automatic",
};

/**
 * The Object.setPrototypeOf() static method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
 
 * Object.setPrototypeOf(obj, prototype)

 * Object.setPrototypeOf() is generally considered the proper way to set the prototype of an object. You should always use it in favor of the deprecated Object.prototype.__proto__ accessor.

 * If the obj parameter is not an object (e.g. number, string, etc.), this method does nothing — without coercing it to an object or attempting to set its prototype — and directly returns obj as a primitive value. If prototype is the same value as the prototype of obj, then obj is directly returned, without causing a TypeError even when obj has immutable prototype
 */

Object.setPrototypeOf(tesla, generiCar);

console.log(tesla.tyres);

//hasOwnProperty

/*
The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it)
*/

// console.log(tesla.hasOwnProperty('tyres'));
// console.log(tesla.hasOwnProperty('functionality'));
// console.log(tesla.hasOwnProperty('hasOwnProperty'));

// console.log(tesla);

/*
The Object.getPrototypeOf() static method returns the prototype (i.e. the value of the internal [[Prototype]] property)
 of the specified object.

*/

console.log(Object.getPrototypeOf(tesla));

let student = {};

let stud = Object.create(student);

console.log(Object.getPrototypeOf(stud) === student);
