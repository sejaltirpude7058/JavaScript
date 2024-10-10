class Principal {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    //if we dont want all objects to take access of any of method that class contains we use static 
    static  logMe(){
        console.log(`USERNAME : ${this.username}`);   
    }

    encryptPass(){
        return `${this.password}in2024`;
    }
}

class Teacher extends Principal{

    constructor(username, password, email){
        super(username); //Super constructor may only be called once
        this.password = password;
        this.email = email;
    }
}

let myUser = new Principal("Sejal", 3535);

//myUser.logMe(); // will not work

console.log(myUser.encryptPass())

let myTeacher = new Teacher("Princy", 123, "prince@.com");

// myTeacher.logMe(); // will not work

console.log(myTeacher.encryptPass());




