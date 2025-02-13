const myName = "Sejal";
const myQualification = "Bachlor's of technology (BTECH)";
const specialization = "Electronics & Telecommunication";

//STRING INTERPOLATION
console.log(
  `Hello my name is ${myName} and my Qualification is ${myQualification} in ${specialization}`
);



const gameName = new String("Sejal Tirpude");

console.log(gameName.length); // 13 // to know the length size of string
console.log(gameName.indexOf("j")); // 2  // to know that the particular chahrater is in which index number
console.log(gameName.charAt(4)); //l // to know that which chahrater is in particular index
console.log(gameName.substring(3, 6)); //al

/**
1. substring()
Syntax: string.substring(start, end)
Extracts a part of a string between start and end (excluding end).
Does not support negative indexes (negative values are treated as 0).
If start > end, it swaps them automatically.
*/
let str = "JavaScript";
console.log(str.substring(1, 4)); // "ava"
console.log(str.substring(4, 1)); // "ava" (swaps start & end)
console.log(str.substring(-3, 4)); // "Java" (negative is treated as 0)

/**
  slice()
Syntax: string.slice(start, end)
Extracts a portion of a string from start to end (excluding end).
Supports negative indexes (counts from the end).
If start > end, it returns an empty string.
 */
let strS = "JavaScript";
console.log(strS.slice(1, 4)); // "ava"
console.log(strS.slice(-3, -1)); // "ip" (negative indexing works)
console.log(strS.slice(4, 1)); // "" (returns empty string)



const user = new String("  Ayush Tirpude  ");
console.log(user);
console.log(user.trim()); //The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
//we can also use trimstart() to trim begining whitespaces
// and we can also use trimend() to trim end whitespaces
// simply trim() removes both bigening and end whitespaces

//to replace some part of string replace method is used
const url = "https//sejalTirpude%22.com";
console.log(url.replace("%22.com", "22@gmail.com")); // will replace %22.com with 22@gmail.com
console.log(url.includes("sejal")); // will return true

//const myQualification = "Bachlor's of technology (BTECH)"
console.log(myQualification.split(" ")); //will split each word after space and will convert it into array

let name = "Sejal Tirpude";
console.log(name.bold()); // <b>Sejal Tirpude</b>

console.log(name.toUpperCase()); //SEJAL TIRPUDE
console.log(name.toLowerCase()); //sejal tirpude
console.log(name.italics()); //<i>Sejal Tirpude</i>
console.log(name.blink()); // don;t use blink coz its no longer valid tag now
console.log(name.search("r" | 8));
console.log(name.at(6)); //T

const newString = new String("Hello kashe kaye mandhadali");
let index = 7;
console.log(
  `so an index of ${index} returns the character ${newString.at(index)}`
);
console.log(
  `Character code ${newString.charCodeAt(index)} is equal to ${newString.charAt(
    index
  )}`
); //Character code 97 is equal to a
//charCodeAt() function will return the ascii value (character code of the particular charater)

//The concat() method of String values concatenates the string arguments to
// this string and returns a new string.
let firstName = "Sejal";
let lastName = "Tirpude";
let fullName = firstName.concat(" ", lastName); // Sejal Tirpude
let rev = lastName.concat(", ", firstName); // Tirpude, Sejal

console.log(fullName);
console.log(rev);

//repeat
const mood = "Happy!! ";
console.log(`i feel ${mood.repeat(5)}`); // i feel Happy!! Happy!! Happy!! Happy!! Happy!!

let apc = "IloveCoding";

console.log(apc.slice(1, 5));

/**
 search() Method in JavaScript
The search() method is used to find the index of the first match of a regular expression in a string. It returns -1 if no match is found.

Syntax:

string.search(regexp)
regexp → A regular expression (or a string, which is treated as a regex).
Example 1: Basic Usage

let str = "Hello JavaScript!";
console.log(str.search("JavaScript")); // Output: 6
console.log(str.search("Python")); // Output: -1 (not found)
Example 2: Using Regular Expressions

let str = "Hello JavaScript!";
console.log(str.search(/javascript/i)); // Output: 6 (case-insensitive search)
console.log(str.search(/\s/)); // Output: 5 (first whitespace index)
 
 */
