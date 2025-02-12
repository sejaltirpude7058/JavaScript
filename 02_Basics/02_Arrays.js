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

















