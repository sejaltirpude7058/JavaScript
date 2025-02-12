/*
 *  Set
A Set is a collection of unique values, meaning no duplicates.

Features
Stores only unique values.
Elements can be of any type (e.g., strings, numbers, objects).
 */


// Create a Set
const mySet = new Set([1, 2, 3, 3, 4]);

console.log(mySet); // Output: Set(4) {1, 2, 3, 4}

// Add values
mySet.add(5);
console.log(mySet); // Output: Set(5) {1, 2, 3, 4, 5}

// Delete values
mySet.delete(2);
console.log(mySet); // Output: Set(4) {1, 3, 4, 5}

// Check if a value exists
console.log(mySet.has(3)); // Output: true

// Size of the set
console.log(mySet.size); // Output: 4

// Iterate through a set
mySet.forEach((value) => console.log(value));
