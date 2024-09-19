//singleton object
//a design pattern that ensures a class only has one instance, which is accessible globally 
//throughout an application

// What is Singleton Method Design Pattern in JavaScript?
// Singleton pattern is a design pattern which restricts a class to instantiate its multiple objects.
// It is nothing but a way of defining a class. Class is defined in such a way that only one instance
// of the class is created in the complete execution of a program or project.

//When to use the Singleton Method Design Pattern in JavaScript

// i. Logging Service: For a logging service that needs to capture and centralize log entries across the
//  entire application, a Singleton can ensure that there’s only one logging instance.
// ii. Managing Shared Resources: In scenarios where you need to manage shared resources like database
//  connections, network connections, or thread pools, a Singleton can help coordinate and control
//   access to these resources.
// iii. Service Classes: For services that should have a single instance, such as a data service, API service
// , or utility service, a Singleton pattern can provide a consistent interface.
// iv. prevent cloning etc

let myObject = new Object({name : "Sejal", age : "23"} );
// console.log(myObject);

/*____________________________________________________________________________________________________________________________ */

//object k andr object
let newOb = {
    id : "j2024",
    fullname : {
        userfullname : {
            firstname : "Sejal",
            lastname : "Tirpude"
        }
    },
    skills : ["Java", "C++", "JavaScript", "ReactJs"]
}

// console.log(newOb.fullname.userfullname.firstname);// Sejal

//__________________________________________________________________________________________________________________________

//how to add 2 objects using Object.assign static method

//The Object.assign() static method copies all enumerable own properties from one or more source
// objects to a target object. It returns the modified target object.


let ob_1 = {
    "fruits" : ["Apple", "Banana", "Mango", "Kivi"],
    "vegies" : ["Cabbage", "curly flower", "spinach", "Broccoli"]
}

let ob_2 = {
    "animals" : ["lion", "Tiger", "Dog", "Elephent"],
    "birds"   : ["peacock", "Egale ", "Sparrow", "Parrot"]
}

//will merge both object and return a single object
 let ob_3 = Object.assign({}, ob_1, ob_2);

//  console.log(ob_3);

 //adding multiple objects using spread operator ...
  
 let myObject_1 = { a : 1, b : 2, c : 3};
 let myObject_2 = { d : 4, e : 5, f : 6};
 let myObject_3 = { g : 7, h : 8, i : 9};
 let myObject_4 = { j : 10, k : 11, l : 12};
 let myObject_5 = { m : 13, n : 14, o : 15};
 let myObject_6 = { p : 16, q : 17, r : 18};
 let myObject_7 = { s : 19, t : 20, u : 21};
 let myObject_8 = { v : 22, w : 23, x : 24 };
 let myObject_9 = { y : 25, z : 26 };

 let myObject_10 = {...myObject_1,
                    ...myObject_2,
                    ...myObject_3,
                    ...myObject_4,
                    ...myObject_5,
                    ...myObject_6,
                    ...myObject_7,
                    ...myObject_8,
                    ...myObject_9
                }

// console.log(myObject_10);

//__________________________________________________________________________________________________________________________________


//Objects inside array

let user = [
    {name : "Sejal"},
    {age: 23},
    {skills : ["Java", "C++", "JavaScript"]},
    {position : "Software Developer"}
]

// console.log(user[2].skills); //[ 'Java', 'C++', 'JavaScript' ]

// console.log(user);

// console.log(user[1]); //{ age: 23 }

//_______________________________________________________________________________________________________________________________________________________________________

let employee = {
    name : "Sejal Tirpude",
    position : "Software Developer",
    salary : "20 LPA",
    address : "Shambhu Nagar", 
    "branch" : "Pune",
    "isLoggedIn" : true,
    "skills" :  ["JavaScript", "ReactJs", "NextJs", "Tailwind CSS"],
    "greeting" : function (){
        console.log(`Hello ${this.name}, Welcome Back!`);
    }
}

//Syntax
//Object.keys(object_name)
//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names

// console.log(Object.keys(employee));
//expected output
//[ 'name', 'position', 'salary', 'address', 'branch', 'isLoggedIn', 'skills', 'greeting' ]

//Syntax
//Object.values(object_name)
//Object.values() static method returns an array of a given object's own enumerable string-keyed property values
// console.log(Object.values(employee));

//syntax
//Object.entries()
//The Object.entries() static method returns an array of a given object's own enumerable string-keyed
// property key-value pairs

// console.log(Object.entries(employee));
//expected output
// [
//     [ 'name', 'Sejal Tirpude' ],
//     [ 'position', 'Software Developer' ],
//     [ 'salary', '20 LPA' ],
//     [ 'address', 'Shambhu Nagar' ],
//     [ 'branch', 'Pune' ],
//     [ 'isLoggedIn', true ],
//     [ 'skills', [ 'JavaScript', 'ReactJs', 'NextJs', 'Tailwind CSS' ] ],
//     [ 'greeting', [Function: greeting] ]
//   ]



//Object.create(object_name)
//The Object.create() static method creates a new object, using an existing object as the prototype
// of the newly created object.

let myNewObject = Object.create(employee);
console.log(myNewObject);//{}

myNewObject.name = "Pranjal";
myNewObject.position = "FullStack Developer";
console.log(myNewObject); //{ name: 'Pranjal', position: 'FullStack Developer' }




//hasOwnProperty()
//The hasOwnProperty() method of Object instances returns a boolean indicating whether this object
// has the specified property as its own property (as opposed to inheriting it).

//Note: Object.hasOwn() is recommended over hasOwnProperty(), in browsers where it is supported

// console.log(employee.hasOwnProperty("address"));



 




 





