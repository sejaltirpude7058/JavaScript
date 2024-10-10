

//define class

class User {
    //constructor
    constructor(username, email, password){
     this.username = username;
     this.email = email;
     this.password = password;
    }
     
    //methods
    encryptPassword(){
        return `${this.username}sbc24`
    }

    usernameCapital(){
        return `${this.username.toUpperCase()}`
    }
}

//object -instance of a class
let userOne = new User("sejal", "sej@l.com", 1320);

console.log(userOne.encryptPassword());
console.log(userOne.usernameCapital());

/****************************************************************************************************/

//behind the scene

// function User(username, password, email){
//   this.username =  username;
//   this.password = password;
//   this.email = email;
// }

// User.prototype.ecryptPassword = function(){
//     return `${this.password}abc23`
// }

// User.prototype.usernameCapital = function(){
//     return `${this.username.toUpperCase()}`
// }

// let myuser1 = new User("harsh", 5643, "har@gmail.com")

// console.log(myuser1.ecryptPassword());
// console.log(myuser1.usernameCapital());








