//de-structuring

//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack
// values from arrays, or properties from objects, into distinct variables.

let candidate = {
    name : "Garima",
    age : 23,
    gender : "female",
    qualification : "BTech Graduate"
}
 //destructuring
let {qualification: q} = candidate;

console.log(q); //BTech Graduate

/************************************************************************************************************************************/

//destructuring of array

let user = ["Sejal Tirpude", 23, "female", "BTech", "Electronics & Telecommunication"];

let [name, age, gender, degree, specialization] = user;

console.log(specialization);//Electronics & Telecommunication
