let myAr = new Array("om", "krish", "dev", "mihi", "kunal", "ovi");

let myAr_2 = new Array("tappu", "sonu", "daya", "goku");

//what if we try to push our second array to our 1st array

// myAr.push(myAr_2);

// console.log(myAr);// ['om','krish','dev','mihi','kunal','ovi',[ 'tappu', 'sonu', 'daya', 'goku' ] ]
//array k andr array chle jayega 

// in order to properly add(MERGE) 2 arrays using concat()
// let newMerge = myAr.concat(myAr_2);
// console.log(newMerge);
//expected output 
// [
//   'om',    'krish',
//   'dev',   'mihi',
//   'kunal', 'ovi',
//   'tappu', 'sonu',
//   'daya',  'goku'
// ]

//merging two arrays using spread operator (...)
//…Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax.…
//…Only iterable values, like Array and String, can be spread in array literals and argument lists.…
//…Copying an array You can use spread syntax to make a shallow copy of an array.…

let myNewMerge = [...myAr, ...myAr_2];
console.log(myNewMerge); //this will also add both arrays into new single array

//------------------------------------------------------------------------------------------------------

let anotherArray = new Array(1,2,3,[4,5],6,7,8,[3,4,5,[6,7,8],9],0); // in this case arrays ke andr addray ko hume ek simple 1 d array bannaa hai to will use flat()
 
//flat()
//flat(depth)
//The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
//The flat() method of Array instances creates a new array with all sub-array elements concatenated 
//into it recursively up to the specified depth.

let anotherArray_2 = anotherArray.flat(Infinity);
console.log(anotherArray_2);
//expected output
//[ 1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8, 9, 0 ]


//----------------------------------------------------------------------------------------------------------
//The Array.isArray() static method determines whether the passed value is an Array.
console.log(Array.isArray("Hitesh"));//false

//The Array.from() static method creates a new, shallow-copied Array instance from an 
//iterable or array-like object.
console.log(Array.from("Hitesh"));//[ 'H', 'i', 't', 'e', 's', 'h' ]

let s1 = 90;
let s2 = 89;
let s3 = 78;
let s4 = 67;
let s5 = 59;
let s6 = 84;
let s7 = 66;
let s8 = 92;

//The Array.of() static method creates a new Array instance from a variable number of arguments, regardless
// of number or type of the arguments.
let myMarksArray = Array.of(s1,s2,s3,s4,s5,s6,s7,s8);

console.log(myMarksArray);
//expected output  [ 90, 89, 78, 67, 59, 84, 66, 92 ]

console.log(myMarksArray.length); //8 length is property not method

//sort()
// The sort() method of Array instances sorts the elements of an array in place and returns the 
// reference to the same array, now sorted. The default sort order is ascending, built upon converting
//  the elements into strings, then comparing their sequences of UTF-16 code units values.

// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// To sort the elements in an array without mutating the original array, use toSorted().

let newArr_1 = myMarksArray.toSorted();
console.log(newArr_1);


//reverse()
//The reverse() method of Array instances reverses an array in place and returns the reference to the
// same array, the first array element now becoming the last, and the last array element becoming the
// first. In other words, elements order in the array will be turned towards the direction opposite to 
// that previously stated.

//To reverse the elements in an array without mutating the original array, use toReversed().

let newArr_2 = myMarksArray.toReversed();
console.log(newArr_2);



/*

Understanding Shallow Copy in Simple Terms
A shallow copy means that if you modify the original array, the copied array may or may not change, depending on the type of data inside it.

🔹 If the array contains only primitive values (numbers, strings, booleans, etc.), then both arrays are independent.
🔹 If the array contains objects (or arrays), then both arrays share references, meaning changes to objects inside one array will reflect in the other.

1️⃣ Example: Shallow Copy with Primitive Values (No Reference Issue)

let arr = [1, 2, 3, 4, 5];
let copiedArr = [...arr]; // Shallow copy using spread operator

copiedArr[0] = 100; // Modify copied array
console.log(arr); // [1, 2, 3, 4, 5] (Original remains unchanged)
✅ Since primitive values are copied separately, changing one does not affect the other.

2️⃣ Example: Shallow Copy with Objects (Reference Issue)

let arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
let copiedArr = [...arr]; // Shallow copy

copiedArr[0].a = 100; // Modify object inside copied array
console.log(arr); // [{ a: 100 }, { b: 2 }, { c: 3 }] (Original is also modified!)
🔴 Why did the original array change?

Both arr[0] and copiedArr[0] point to the same object in memory.
Modifying copiedArr[0].a also modifies arr[0].a, since they share the same reference.
3️⃣ What Happens If You Modify the Original Array?
If you change a primitive value in the original array, the copied array is not affected.
If you change an object inside the original array, the copied array is affected.

let arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
let copiedArr = [...arr];

arr[0].a = 500; // Change original array
console.log(copiedArr); // [{ a: 500 }, { b: 2 }, { c: 3 }] (Copied array also changed!)
🔴 Again, both arrays share references to objects.

Conclusion
Modification Type	Does It Affect the Copy?
Changing a primitive value in the original	❌ No effect on copied array
Changing a primitive value in the copied array	❌ No effect on original array
Changing an object inside the original	✅ Copied array is affected
Changing an object inside the copied array	✅ Original array is affected
If you want to avoid reference issues, use a deep copy:


let deepCopy = JSON.parse(JSON.stringify(arr));
✅ Now the copied array is completely independent.



*/













