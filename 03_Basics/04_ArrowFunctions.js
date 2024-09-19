// let myArrowFunction = (num_1, num_2) => {
//     return num_1 + num_2;
// }
// console.log(myArrowFunction(45, 55));



//implisit return
let addNumbers = (num_1, num_2) => (num_1 + num_2);
console.log(addNumbers(1200, 500));


//explisit return -> whenever we use curly braces we need to use return keyword
let productofNumbers = (num1, num2) => {
    return num1 * num2;
}
console.log(productofNumbers(3,2));




let user1 = () => ({userName:"Sejal"});
console.log(user1());


