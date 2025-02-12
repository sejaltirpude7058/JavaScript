// let h1 = document.querySelector("h1");

//not a good method very bad approach
// setTimeout(()=>{
//    h1.style.color = "red";
// },1000)
// setTimeout(()=>{
//    h1.style.color = "green";
// },2000)
// setTimeout(()=>{
//    h1.style.color = "crimson";
// },3000)
// setTimeout(()=>{
//    h1.style.color = "orange";
// },4000)


// __________________________________________________________________________________________________



//this is also not good method
// function changeColor(color, delay){
//     setTimeout(()=>{
//      h1.style.color = color;
//     }, delay)
// }

// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("orange", 3000);
// changeColor("purple", 4000);
// changeColor("crimson", 5000);


//__________________________________________________________________________________________________



// function changeColor(color, delay, nextcolor){
//     setTimeout(()=>{
//      h1.style.color = color;
//      if(nextcolor) nextcolor();
//     }, delay);
// }

// changeColor("red", 1000, ()=>{
//    changeColor("green", 1000, () => {
//     changeColor("purple", 1000, () => {
//         changeColor("crimson", 1000, () => {
//               changeColor("blue", 1000)
//         })
//     })
//    })
// })

//callback nesting -- callback hell
//----------------------------------------------------------------------------------------------------

// function savetoDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDB("first data", () => {
//     console.log(` success : Your data was Successfully saved 1`);
//     savetoDB("Second Data", () => {
//        console.log(` success : Data saved successfully 2`);
//        savetoDB('third Data', () => {
//           console.log(` success : Data saved successfully 3`);
//        },() => {
//           console.log(`failure : Weak connection Data was not saved 3`);
//        } )
//     },
//     () => {
//       console.log(`failure : Weak connection Data was not saved 2`);
//     } 
// )
// },
// () => {
//     console.log(`failure : Weak connection Data was not saved`);
// }
//  );

//---------------------------------------------------------------------------------------------------



// function savetoDBPromise(data){
//     return new Promise(function(resolve, reject){
//         let internetSpeed = Math.floor(Math.random() * 10 ) + 1;
//         setTimeout(()=>{
//          if(internetSpeed > 4){
//             resolve(`success : Data was saved`);
//          }else{
//             reject(`failure : Weak Connection`);
//          }
//         },1000)
//     })
// }

// let request = savetoDBPromise({name : "sejal", age: 23});
// console.log(request);

// //the result is our resolve msg  resolve(`success : Data was saved`);
// request
// .then((result)=>{
//     console.log(`Promise1 resolved!`);
//      console.log(result);
//     return savetoDBPromise({branch : "ETC"})
// })
// .then((result) => {
//   console.log(`Promise2 resolved!`);
//   console.log(result);
//   //error is our reject msg   reject(`failure : Weak Connection`);
// })
// .catch((error) => {
//     console.log(`Error: Something went wrong promise rejected`);
   
// });

//---------------------------------------------------------------------------------------------------


// changing color using promise 

// function changeColor(color){
//    return new Promise((resolve, reject) => {
//      setTimeout(() => {
//         h1.style.color = color;
//          resolve("Color Changed");
//      }, 1000);
//    })
// }

// let request = changeColor("red");

// request
// .then((msg) => {
//     console.log("Promise Consumed");
//     console.log(msg);
//     return changeColor("blue");
// })
// .then((msg) =>{
//     console.log("Promise2 Consumed");
//     console.log(msg);
//     return changeColor("crimson");
// })
// .then((msg) => {
//     console.log("Promise3 Consumed");
//     console.log(msg);
//     return changeColor("green");
// })
// .catch((error)=> {
//     console.log(error);
// })

// function changeColor(color){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("Color Was Changed");
//         }, 1000)
//     })
// }


// async function demo(){
//   await changeColor("red");
//   await changeColor("blue");
//   await changeColor("green");
//   await changeColor("crimson");
//        changeColor("purple");
// }

// demo();

let body = document.querySelector("body");

function changeBackColor(color){
  return new Promise((resolve, reject) => {
    let randomValue = Math.floor(Math.random()*10)+1;
    if(randomValue > 5){
        setTimeout(() =>{
        body.style.backgroundColor = color;
        console.log(`color changed to ${color}`);
        resolve("Color was changed");
    }, 1000);
    }else{
        reject("Promise rejected");
    }
  })
}

async function demo(){
  // await changeBackColor("red");
  // await changeBackColor("green");
  // await changeBackColor("purple");
  // await changeBackColor("orange");
  // await changeBackColor("crimson");
  // await changeBackColor("blue");

  // //but if any of above promise is rejected our below code will not work
  // //lets suppose we have to code something below
  // let a = 5;
  // console.log(`value is : ${a+5}`);

  //in order to avoid this we use try and catch method

  try {
    await changeBackColor("red");
    await changeBackColor("green");
    await changeBackColor("purple");
    await changeBackColor("orange");
    await changeBackColor("crimson");
    await changeBackColor("blue");
  } catch (error) {
    console.log(`ERROR : ${error}`);
  }

  let a = 5;
  console.log(`value is : ${a+5}`);
}

demo();
