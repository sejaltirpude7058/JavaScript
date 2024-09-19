//  What is this?
// In JavaScript, the this keyword refers to an object.
// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

let myUser = {
    id : 23,
    name : "Sejal",
    jobrole : "Software Developer",
    qualificaton : "BTech",
    city : "Nagpur",
    state : "Mharashtra",

    message : function(){
        console.log(`Hi ${this.name}, Welcome back to our website!!`);
        console.log(this);//this refers to the current context
        
    }
    
}

// myUser.message();

console.log(this);
// browser k andr jo engine run krta h sabse zyada jo global object h vo windows object h
// browser k ander jo global object h vo window h


const myFunction = function(){
    let userName = "Bhavya";
    console.log(this.userName); //undefined  ||does not work in function
}
myFunction();

const myArrow = () => {
    let userName = "Sejal";
    console.log(this.userName); // not works in arrow function too 
}

myArrow();