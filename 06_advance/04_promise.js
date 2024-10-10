/*
A Promise is an object representing the eventual completion or failure of an asynchronous
operation. Since most people are consumers of already-created promises
Essentially, a promise is a returned object to which you attach callbacks, instead of passing 
callbacks into a function. refer mdn

Promise: A promise is like a box that holds a future value. It can either succeed (resolve) or fail 
(reject). You can tell the promise what to do after it finishes using .then() (for success) and 
.catch() (for failure).

Resolve & Reject:

Resolve: Happens when the task inside the promise is successful.
Reject: Happens when the task fails, usually because of an error.

*/

//creating promise

let myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`async task`);
        resolve();
    },1000)
})

/*
  .then(): This is used to handle the result of a successful promise. After the promise resolves, 
 the code inside .then() runs.
 */

//consuming promise
myPromise.then(function(){
    console.log(`Promise consumed`);  
})

//creating promise without variable
new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log(`Async task two`);
        resolve();
    },3000);
}).then(()=>{
    console.log(`Promise consumed successfully`);
    
})


//creating promise 3 

const prmoise_3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username : "Sejal", password : "2312"})
    }, 2000);
})

prmoise_3.then(function(user){
    console.log(user.username);
})

//promise 4 

const myPromise_4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Sejal", email : "sej@l.com", phone : 2345432})
        }else{
            reject('ERROR : somthing went wrong');
        }
    },2000);
})

myPromise_4.then(function(user){
  console.log(user);
  return user;
})
.then(function(user){//chaining yani jo upper vale then se value return hokr aayegi vhi apke nye chain(then) me aayegi
    console.log(user.email);
    return user;
})
.catch(function(error){//.catch(): This is used to handle errors if the promise fails (rejects)
    console.log(error);
})
.finally(function(){
    console.log('Either resolved or rejected');
    
})

/**
The finally block in JavaScript is used to run code after a promise is settled, whether it was 
resolved (successful) or rejected (failed). It ensures that the code in the finally block always 
runs, no matter what happened in the promise (success or error).
Key Points:
finally always runs after the .then() and .catch() blocks.
It is useful for cleanup tasks, like stopping a loading spinner or closing a connection, regardless
 of success or failure.
 */

//creating promise 5 and using  async await try catch 

const promise_5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({courseName : "JavaScript", coursePrice : 23000})
        }else{
            reject('Error : JS went wrong')
        }
    }, 1000)
});

async function consumePromise(){
/*
1. try-catch:
try-catch is a way to handle errors in your code. You put the code that might fail inside a try 
block, and if something goes wrong, the code in the catch block will run. It’s mostly used with
 async/await to catch errors in asynchronous code.
Try: Executes the code that might throw an error.
Catch: Handles any error that happens inside the try block
 */
    try {
        const response = await promise_5;
        console.log(response)
    } catch (error) {
        console.log(error);
        
    }
}
//dont forget to call function
consumePromise()

/*
3. async/await:
async is a keyword that allows you to write asynchronous code that looks like normal code. When you 
mark a function as async, it can "pause" using await to wait for a promise to resolve before moving
 to the next line of code.

await can only be used inside an async function. It waits for a promise to resolve, instead of using 
.then().

Why use async/await?

It makes your code easier to read and understand, especially when you have multiple asynchronous
 operations
*/

//---------------------------------------------------------------------------------------------------

// async function getAllUsers(){
//     try {
//         // await isliye use kiya h kyuki response ko aane me time lgta h
//         let response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         //below humne await isliye use kiya h data ko yani jo bh respaonse aya h usko json format me krne ko b time lgta h
//         let data =  await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(`Error: ${error}`);
//     }
// }

// getAllUsers();

//using fetch in then catch


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
   return response.json();
})
.then((data) => {
    console.log(data);   
})
.catch((error) => {
    console.log('E:', error);
})
.finally(() => {
    console.log(`Promise is either resolved or rejected`);
})

//function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>
/*
2. fetch():
fetch() is a built-in function to make HTTP requests (like getting data from a server). It returns a promise.
It’s commonly used to get data from APIs.
You can handle the result using .then() or async/await.
*/