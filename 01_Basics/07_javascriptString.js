const myName = "Sejal";
const myQualification = "Bachlor's of technology (BTECH)";
const specialization = "Electronics & Telecommunication";

console.log(
  `Hello my name is ${myName} and my Qualification is ${myQualification} in ${specialization}`
);



const gameName = new String("Sejal Tirpude");

console.log(gameName.length); // 13 // to know the length size of string
console.log(gameName.indexOf("j")); // 2  // to know that the particular chahrater is in which index number
console.log(gameName.charAt(4)); //l // to know that which chahrater is in particular index
console.log(gameName.substring(3, 6)); //al
console.log(gameName.slice(2, 4)); // ja

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
