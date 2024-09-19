//how to use symbol in object
let empID = Symbol("Id");

let employee = {
    [empID] : "J2024",
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

console.log(employee.greeting());


console.log(employee.name);

console.log(employee["branch"]);
console.log(employee[empID]);


console.log(employee);

// console.log(employee.salary);//20 LPA

// //to prevent  changes use freeze()
// Object.freeze(employee);

// employee.salary = "18 LPA";

// console.log(employee.salary);//20 LPA

employee.notifie = function(){
    console.log(`Hello ${this.name} please complete the task within given time as it is important`);   
}

employee.notifie();



