//for of loop
/*
The for...of statement executes a loop that operates on a sequence of values sourced from an
iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, 
Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators
produced by generator functions, and user-defined iterables.
*/



let myArr = new Array(1,2,3,4,5,6,7,8,9,10);

for(let index of myArr){
   console.log(index);
   
}

let myStr = new String("sejal");

for(let element of myStr){
    console.log(element);
    
}