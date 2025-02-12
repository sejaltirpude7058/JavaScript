//two types of memories 1. stack  2. heap
// stack (primitive)
//--> stack memory hamare jitne bh primitive datatypes h vaha sab jgh hamari stack memory use hoti h
// jo bh humne variable declare kiya h uska hume copy milta h

// Heap (non-primitive)
//--> heap memory hamare jitne bh non primitive datatypes h vaha use hoti h
//jo bh variable  declare kiya h uska hume refernce milta h

//stack
let myName = "Sejal"
let anotherName = myName
 anotherName = "Chakula"

 console.log(myName)
 console.log(anotherName);


 /*

   Stack Memory:
+-------------------+
| myName            | ---> "Sejal"
+-------------------+
| anotherName       | ---> "Chakula"
+-------------------+

  
  */

 //heap
 let userOne = {
    name : "Sejal",
    age : 22,
    email : "sejal@70google.com"
 }
 
 let userTwo = userOne
 
 userTwo.email  = "sejal@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);


 /*

  Stack Memory:                      Heap Memory:
+----------------+              +----------------------------+
| userOne        | ------------>| {                          |
+----------------+              |   name: "Sejal",           |
| userTwo        | ------------>|   age: 22,                 |
+----------------+              |   email: "sejal@gmail.com" |
                                +----------------------------+

  
  */