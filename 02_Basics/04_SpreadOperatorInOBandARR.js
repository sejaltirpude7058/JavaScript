let myArr = new Array(5,6,7,8);

let newArr = new Array(1,2,3,4, ...myArr, 9,10);  // copying individual elements to new array
console.log(newArr);

//mrege two array

let  ar1 = ["hello", "my", "name"];
let ar2 = ["is", "sejal", "tirpude"];

let mergAr = [...ar1,...ar2]
console.log(mergAr);

//passing array elements to function 

function makePizza(ing1, ing2, ing3){
    console.log(`three main ingrediants to make pizza are ${ing1}, ${ing2} and ${ing3}`);
}

let pizzaIngrediants = new Array("PizzaBase", "Vegies", "Cheese");

makePizza(...pizzaIngrediants);

//------------------------------------------------------------------------------------------------------------------------------------------


//objects

let obj = new Object({
    a : "1",
    b : "2",
    c : "3"
});

let newobj = { ...obj, d :"4", e : "5"};

console.log(newobj);

//merge two object

let myOb1 = {
    1 : "s",
    2 : "e",
    3 : "j"
}

let myOb2 = {
    4 : "a",
    5 : "l"
}

let mynewob = { ...myOb1, ...myOb2};
console.log(mynewob);


//spread is always used on the right side of the =
