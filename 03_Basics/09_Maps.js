/*
 *  Map
A Map stores key-value pairs. Unlike objects, the keys in a Map can be of any type (e.g., strings, numbers, objects).

Features
Preserves the insertion order of key-value pairs.
Keys can be of any type.
 */

// Create a Map
const myMap = new Map([
  ["name", "Sejal"],
  ["age", 22],
]);

console.log(myMap); // Output: Map(2) {"name" => "Sejal", "age" => 22}

// Add or update a key-value pair
myMap.set("city", "Nagpur");
console.log(myMap); // Output: Map(3) {"name" => "Sejal", "age" => 22, "city" => "Nagpur"}

// Get value by key
console.log(myMap.get("name")); // Output: "Sejal"

// Check if a key exists
console.log(myMap.has("age")); // Output: true

// Delete a key
myMap.delete("city");
console.log(myMap); // Output: Map(2) {"name" => "Sejal", "age" => 22}

// Size of the Map
console.log(myMap.size); // Output: 2

// Iterate through a map
myMap.forEach((value, key) => console.log(key, value));
