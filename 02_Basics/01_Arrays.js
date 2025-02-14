//in arrays we can store multiple values in a single variable(enables storing a collection
// of multiple items under a single variable name)
//in other programming languages such as c++ java arrays can store the values of similar datatype

// In JavaScript, arrays aren't primitives but are instead Array objects with the following core
// characteristics:

// JavaScript arrays are resizable and can contain a mix of different data types.

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using
//arbitrary strings as indexes

// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at
// index 1, and so on

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations
// with any JavaScript objects create shallow copies, rather than deep copies).

//Shallow Copies
// shallow copy of an object is a copy whose properties share the same references (point to the same
// underlying values) as those of the source object from which the copy was made. As a result, when
// you change either the source or the copy, you may also cause the other object to change too.

//Deep Copy
// A deep copy of an object is a copy whose properties do not share the same references
// (point to the same underlying values) as those of the source object from which the copy was made.
//As a result, when you change either the source or the copy, you can be assured you're not causing
//the other object to change too.

//  initialization and declaration
// let myArr = [1,2,3,4,5,6,7];
// console.log(myArr);

// let myArr2 = new Array(1,2,3,4,5,6,7);
// console.log(myArr2);

let arr = new Array(1,2,3,4,5);

// console.log(arr[2]); //3

// updation
//  arr[3] = 9;
//  console.log(arr);

 //to add values in end of array use push()
 arr.push(6);
 arr.push(7);

 //to delete values from end use pop()
 arr.pop();

 //to add value at starting of array
 arr.unshift(10);

 //to delete values at starting of array
 arr.shift();
 arr.shift()

//  console.log(arr);

// //to convert array into string
// let newArr = arr.join();
// console.log(newArr);

// console.log(typeof newArr);//string

//slice()
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

/**
 
Example 1: slice() with Primitive Values (No Reference Issues)

let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4); // [2, 3, 4]

console.log(newArr); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5] (Original remains unchanged)
Since primitive values are copied, newArr has a completely separate copy.

Example 2: slice() with Objects (Shallow Copy Issue)

let arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
let newArr = arr.slice(0, 2); // Copies first two elements

console.log(newArr); // [{ a: 1 }, { b: 2 }]

// Modifying an object inside newArr
newArr[0].a = 100;
console.log(arr); // [{ a: 100 }, { b: 2 }, { c: 3 }] (Original is affected!)
🔴 Why did arr change?

slice() copied the object references.
Both arr[0] and newArr[0] point to the same object in memory.
Modifying newArr[0] also modifies arr[0], since both refer to the same address.
Key Takeaways
1️⃣ slice() creates a new array (the original is not modified).
2️⃣ For primitive values, it copies the values.
3️⃣ For objects, it copies references, meaning changes inside the object affect both arrays.
4️⃣ If you need a deep copy (to avoid reference issues), use structuredClone() or JSON.parse(JSON.stringify(array)).
 
 */

let myStringArr = new Array("vedika", "mihi", "poonam", "prajakta", "devika");
console.log(myStringArr);

let myns1 = myStringArr.slice(1, 3);
console.log(myns1);  //[ 'mihi', 'poonam' ]

console.log("A ", myStringArr); //our original array will remain as it is

//  Splice()
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

let myns2 = myStringArr.splice(1,3);

console.log(myns2); //[ 'mihi', 'poonam', 'prajakta' ]

console.log("B ", myStringArr); //our original array will also change to   [ 'vedika', 'devika' ]

let arr2 = new Array("a", "aa", "e", "ee", "u", "uu", "ay" , "ayii", "o", "ou");

let a1 = arr2.toSpliced(1,4);
console.log(a1);// [ 'a', 'uu', 'ay', 'ayii', 'o', 'ou' ]

console.log(arr2); // after  using tospliced() method our original array will remain as it is

let myArr = ["january", "july", "March", "august"];

myArr.shift();
myArr.shift();
myArr.unshift("june");
myArr.unshift("july");

console.log(myArr);

const numbers =[1,-1,2,-2,3,0,4];

// const newNumbers = numbers.filter(num => num >=0).map(num => num*num);
// console.log(newNumbers);

const n = [1, 4, 9, 0, 16];
console.log(n.slice(2));