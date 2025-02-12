//filter()

//The filter() method of Array instances creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the test implemented by the
// provided function.

/**
 callBackFn
 A function to execute for each element in the array. It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise. The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

array
The array filter() was called upon.

thisArg Optional
A value to use as this when executing callbackFn. See iterative methods.

Return value
A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.

Description
The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array. Read the iterative methods section for more information about how these methods work in general.

callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

The filter() method is generic. It only expects the this value to have a length property and integer-keyed properties.
 */



let myNumbers = new  Array(1,2,3,4,5,6,7,8,9,10);
                            //parameter    //condition
 let myNewNum = myNumbers.filter( (num) => (num > 5) );

 //console.log(myNewNum);  //[ 6, 7, 8, 9, 10 ]
 

 // go through the arrow function notes if we use () paranthesis for condition we dont need to return
//but if we use {} Curly Braces we need to return  for example

let newNums2 = myNumbers.filter(  (num) => {
    return num > 6;
} );
// console.log(newNums2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userBooks = books.filter( (bk) => {
    return bk.genre === "Science" && bk.publish >= 2000;
  })

  console.log(userBooks);
  

  let userBooks2 = books.filter ( (bk) => (bk.genre === "Fiction"))

  console.log(userBooks2);
  
 let userBooks3 = books.filter((bk)=> (bk.title === "Book Eight"))

 console.log(userBooks3);
 
 