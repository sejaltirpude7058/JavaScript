// Function 'setUsername' is defined to set the 'username' property of an object
// It takes 'username' as a parameter and assigns it to 'this.username'
function setUsername(username) {
    this.username = username;  // 'this' refers to the current object that calls this function
    console.log(`called`);  // Prints "called" when this function is executed
}

// Function 'setUserEmail' is defined to set the 'email' property of an object
// It takes 'email' as a parameter and assigns it to 'this.email'
function setUserEmail(email) {
    this.email = email;  // 'this' refers to the current object that calls this function
    console.log(`called`);  // Prints "called" when this function is executed
}

// Constructor function 'createUser' is defined to create user objects
function createUser(id, username, email, phone) {
   this.id = id;  

   // Using the 'call()' method to invoke 'setUsername' with a specific 'this' value
   // 'call()' allows us to execute a function with a specific value of 'this'
   // Here, 'this' refers to the current object being created (the instance of 'createUser')
   setUsername.call(this, username);  // Calls 'setUsername' and sets 'this.username' for the current object
   //this hum isliye bhejre h taki ensure kre ki setUsername vala function khud ka current context nhi 
   //createUser ka current context use kre
   // Using 'call()' again to invoke 'setUserEmail' with 'this' referring to the current object
   setUserEmail.call(this, email);  // Calls 'setUserEmail' and sets 'this.email' for the current object

   // Setting the 'phone' property directly without using any helper functions
   this.phone = phone;  
}

// Creating a new instance of 'createUser' using the 'new' keyword
// The 'new' keyword creates a new object and sets 'this' to that new object inside the constructor
let myUser = new createUser(1, "shahrukh", "shah@.com", 32353645);


console.log(myUser);  

/*
Why use .call()?
The .call() method is used to invoke a function with a specific this value. In this case, we need to
 ensure that both setUsername and setUserEmail functions work with the this context of the current
  object being created by createUser. If we don’t use .call(), the this keyword inside these 
  functions might refer to the global object (in non-strict mode) or be undefined (in strict mode).

How .call() works:
When we use setUsername.call(this, username);, the this inside setUsername refers to the current
 object created by the createUser function. This allows us to assign the username and email directly 
 to the newly created object.
*/