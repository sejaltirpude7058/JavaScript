//Immediately Invoked Function Expressions IIFE

//jo function immediately execute hojaye Global scope k pollution se problem hoti h kyi bar to us 
//global scope k jo variables h ya jo bh declaration h to uske pollution ko hatane k liye humne 
//IIFE ka use kiya

//named IIFE
(function display(){
  console.log(`Hey There I am Learning JavaScript`)
})();// its important to put semicolon when you are using IIFE to avoid errors

//unnamed IIFE
((userName) => (console.log(`Hi ${userName}, Thank you for visiting!! `)
))("Zain");

((number1, number2) => {// parameters
    console.log(number1 + number2);
   })(3,10);// arguments