
function greetings(name){
    console.log(`Hey!! ${name}, Hope your're doing well!`);
    
}
greetings("Sejal");


function myFunction(){
    console.log("Hello, World!!");
}
myFunction();



function myFunction2(number1, number2){
    const result = (number1 + number2);
    return result;
}
let myResult = myFunction2(3,7);
console.log(myResult);




function anotherTwoNumbers(number1, number2){//parameters
   return number1 + number2;
}
const result1 = anotherTwoNumbers(3,1);//arguments
console.log(result1);




function isLoggedIn(username){
    if(!username){
        return `Please enter the username!`;
    }else{
        return `${username} just logged in!`
    }
}

console.log(isLoggedIn("Harsh"));
