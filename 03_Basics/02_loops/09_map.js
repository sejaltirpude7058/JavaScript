//map()
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

let myNums = [1,2,3,4,5];

let mynum2 = myNums.map((num)=>(num + 10));

console.log(mynum2);
//expected output [ 11, 12, 13, 14, 15 ]

let myNewNum = myNums.map((num)=>(num + 3)).map((num)=>(num + 10)).filter((num)=> (num > 10));

console.log(myNewNum); //[ 14, 15, 16, 17, 18 ]
                     