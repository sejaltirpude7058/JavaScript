

class User {

    constructor(username){
        this.username = username
    }

    unCapital(){
        return `${this.username.toUpperCase()}`
    }
}
  //inhertance
class client extends User {

    constructor(username, email, password, phone){
       super(username); //works excactly like functionName.call(this, username)
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

     encryptPassword(){
        return `${this.password}atp04`
     }

     editUpdate(){
       console.log(`new changes were done in code by ${this.username}`);
     }

}

let myUser_1 = new client("dipika", "dip@ka.com", 12341, 95933992);

console.log(myUser_1.editUpdate());
console.log(myUser_1.encryptPassword());

//myUser_1 which is object of client class can also access methos and properties of User class
//because it inherits USER class
//but User class which is the parent class of client will not be able to use the methos and properties inside
//client class 
console.log(myUser_1.unCapital());

let HdUser = new User("lalil");

console.log(HdUser.unCapital());

//intanceof

console.log(myUser_1 instanceof client); //true
console.log(myUser_1 instanceof User);   //true
console.log(HdUser instanceof User);     //true
console.log(HdUser instanceof client);   //false






