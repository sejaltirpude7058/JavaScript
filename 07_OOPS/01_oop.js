
const user = {
    username : "ganga",
    password : 1234,
    email : "g@ng.com",
    isLoggedIn : true,
    getUserDetails : function(){
       console.log(this.username);
       console.log(this);
    }
}

// user.getUserDetails()
// console.log(this);
//----------------------------------------------------------------------------------------------------
//constructor
function User(name, isLoggedIn, email, password, phone){
   this.name = name;
   this.isLoggedIn = isLoggedIn;
   this.email = email;
   this.password = password;
   this.phone = phone;
}

//object from constructor
const user_1 = new User("sejal", true, "sej@.com", 1234, 21223434);
const user_2 = new User("mihan", false, "mhi4.com", 9087, 90432849);

// console.log(user_1);
// console.log(user_2);

//NOTE IMP* : its very important to write new keyword whenever declaring object through constructor 
//other wise it will overwrite property values try if not undersatnd
//new keyword ka hum jab use krenege to ek empty object areate hota hai jisse instance kaha jata h
//step 1 : new object create hota h
//step 2 : constructor function call hota h new keyword k karan it jitte bh arguments sab uske andr pack krta pas krta h contructor ko
//step 3 : this keyword k values jo arguments k through humne pas ki h constructor k jo parameters h unko milti h or this usko inject krta h
//step 4 : haamara new object properties k sath ready ho jata h

console.log(user_1.constructor); //[Function: User]
console.log(user_1 instanceof User);
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere
// in the prototype chain of an object. The return value is a boolean value. Its behavior can be 
//customized with Symbol.hasInstance.
//The instanceof operator tests the presence of constructor.prototype in object's prototype chain.
// This usually (though not always) means object was constructed with constructor


