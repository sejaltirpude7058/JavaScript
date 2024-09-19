/*
Map
The Map object holds key-value pairs and remembers the original insertion order of the keys.
 Any value (both objects and primitive values) may be used as either a key or a value.

 Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique 
 in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 
 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which 
 corresponds to the order in which each key-value pair was first inserted into the map by the set()
  method (that is, there wasn't a key with the same value already in the map when set() was called).

*/

let myMap = new Map();

//set()
//The set() method of Map instances adds or updates an entry in this map with a specified key and a value.

myMap.set("Jhon", {phone : 9303348, address : "london" })
myMap.set("Kristy", {phone : 8700348, address : "Paris" })
myMap.set("Sher", {phone : 9303348, address : "NewYork" })
myMap.set("Nia", {phone : 4503348, address : "losAngels" })
myMap.set("desmod", {phone : 4423411, address : "Dubai" })

for(let e of myMap){
    console.log(e);
    
}

//has()
//The has() method of Map instances returns a boolean indicating whether an element with the 
//specified key exists in this map or not.
console.log(myMap.has("Sher")); //true

//get(key)
/*
he get() method of Map instances returns a specified element from this map. If the value that is 
associated to the provided key is an object, then you will get a reference to that object and any
 change made to that object will effectively modify it inside the Map object
*/

console.log(myMap.get("Jhon"));


//keys()
//The keys() method of Map instances returns a new map iterator object that contains the keys for 
//each element in this map in insertion order

    console.log(myMap.keys());
   // expcted output [Map Iterator] { 'Jhon', 'Kristy', 'Sher', 'Nia', 'desmod' }


console.log(myMap.values());
//will return values

//clear() -> The clear() method of Map instances removes all elements from this map


//The delete() method of Map instances removes the specified element from this map by key.
//syntax -> mapInstance.delete(key)


myMap.delete("Jhon");


//entries()
//The entries() method of Map instances returns a new map iterator object that contains the
// [key, value] pairs for each element in this map in insertion order.

console.log(myMap.entries());

/** 
 The [Symbol.iterator]() method of Map instances implements the iterable protocol and allows Map 
 objects to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of 
 loops. It returns a map iterator object that yields the key-value pairs of the map in insertion order.

The initial value of this property is the same function object as the initial value of the 
Map.prototype.entries property.
*/


const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1[Symbol.iterator]();

for (const item of iterator1) {
  console.log(item);
}
// Expected output: Array ["0", "foo"]
// Expected output: Array [1, "bar"]

const myMap2 = new Map();
myMap2.set("IN", "India");
myMap2.set("US", "America");
myMap2.set("FR", "France");
myMap2.set("AUS", "Australia");
myMap2.set("GR", "Germany");
myMap2.set("IN", "India");

for(const myKeys of myMap2){   // [ 'IN', 'India' ]
   // console.log(myKeys);      // [ 'US', 'America' ]
}                             // [ 'FR', 'France' ]
                              // [ 'AUS', 'Australia' ]
                              // [ 'GR', 'Germany' ]

 for(const [myKeys, myValues] of myMap2){ //[myKeys, myValues]-> destructuring into keys and values
    console.log(myKeys, "->", myValues);
 }   //expected output
//  IN -> India
//  US -> America
//  FR -> France
//  AUS -> Australia
//  GR -> Germany