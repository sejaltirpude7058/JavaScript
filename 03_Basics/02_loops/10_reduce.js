/*
 
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each
 element of the array, in order, passing in the return value from the calculation on the preceding 
 element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation".
 If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is
used as the initial value and iteration starts from the next element (index 1 instead of index 0).

The reduce() method processes each element of an array using a callback function, accumulating 
results. The callback is called with:

accumulator: Result of the previous callback call or initialValue if provided.
currentValue: The current element's value.
currentIndex: The index of the current element.
array: The array reduce() is working on.
It returns a single accumulated value. If no initial value is given, the first array element becomes 
the initial accumulator

*/

let myNumbers = new Array(1,2,3,4,5,6,7,8,9,10);
let initialValue =0;
let mySum = myNumbers.reduce((accumulator, currentValue) => {
   // console.log(`${accumulator} and ${currentValue}`);
    return accumulator + currentValue
}, initialValue);

console.log(mySum);
//expected Output 
/**
0 and 1
1 and 2
3 and 3
6 and 4
10 and 5
15 and 6
21 and 7
28 and 8
36 and 9
45 and 10
55
 */

const shoppingCart = [
    {
        courseName : "JavaScript for begineers",
        coursePrice : 2999
    },   
    {
        courseName : " Core Java",
        coursePrice : 999
    },   
    {
        courseName : "C++ with DSA",
        coursePrice : 3595
    },   
    {
        courseName : "Data Analytics",
        coursePrice : 1999
    },   
    {
        courseName : " Complete HTML and CSS",
        coursePrice : 599
    }  
]


let TotalPrice = shoppingCart.reduce((acc, item) => {
    console.log(`acc : ${acc} + currValue : ${item.coursePrice}`);
    return acc + item.coursePrice
}, 0)

console.log(TotalPrice);
