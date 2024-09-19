
let myNumbers = function(num1){
  return num1;
  
}
console.log(myNumbers(200 , 400, 500 ));
// the output will only come 200 as there is only 1 parameter


//rest operator ...
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an
// array, providing a way to represent variadic functions in JavaScript
 
//variadic functions :-
// In computer programming, a variadic function is a function of indefinite arity, i.e., one which 
// accepts a variable number of arguments. Support for variadic functions differs widely among 
// programming languages.

//passing mutliple arguments and using rest operator

let myNumbers_2 = function(...num){//(...)but if we used rest operator it will return the array of all the values
    return num;
}

// console.log(myNumbers_2(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));
//expected output  [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]



let myNumbers_3 = function(val1, val2 ,...number){
    return number;
}
console.log(myNumbers_3(1, 2, 3, 4, 5));
//expected output [ 3, 4, 5 ]  
//kyuki start ki values val1 me 1 or val2 me 2 or baki ka array bn jayega

//---------------------------------------------------------------------------------------------------------------------------


/*
passing objects to function

*/

const Student = {
    id: 1,
    name: "Sejal Tirpude",
    education: "BTech",
    Specialization: "Electronics"
 }

 function myStudent(anyObj){
    console.log(`My Student name is ${anyObj.name} and she is ${anyObj.education} Graduate`);
    
 }

myStudent(Student);

// passing Arrays into function
 let myArr = [1,2,3,4,5,6,7,8,9];

 function handledArray(arr){
   for(i=0; i<arr.length; i++){
    console.log(arr[i]);
   }
 }

 handledArray(myArr);
