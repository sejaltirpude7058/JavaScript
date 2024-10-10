// let score = 44;

// if(typeof score === "number"){
//     console.log("yes its number");
    
// }else{
//     console.log("not a number");
    
// }

// let isLoggedIn = false;

// if(isLoggedIn) console.log(`user logged in`);
// else console.log(`not logged in yet`);


// let myArr = [];

// if(myArr.length === 0) console.log(`empty`);

// console.log(`😇`);
// console.log(`💔`);


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
 
// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// }


// //switch statement 

// let day = 'sunday';

// switch(day){
//    case 'monday' : 
//    console.log(`Go to meetup`);
//    break;
//    case 'tuesday' :
//    case 'wednesday' :
//    case 'thrusday' :
//     console.log(`study`);
//     break;
//     case 'friday' : 
//     console.log(`Work on projects`);
//     break;
//     case 'saturday' :
//       case 'sunday' :
//         console.log(`Enjoy weekends`);
//         break;
//         default :
//         console.log(`please enter valid day`);
//         break;      
// }


  //ternary operator
  let age = 18;
  let drink = age <= 19 ? `drink wine🍷` : `drink water💧`
  console.log(drink);

  console.log(`I like to drink ${age <= 18 ? `wine🍷` : `water💧`}`);

  //in string literals we can use ternary operator but cammot use if else expresseion
  