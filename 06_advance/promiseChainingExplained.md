## Chaining in Promises
Promise chaining allows multiple asynchronous operations to run one after another in a sequential manner by returning a promise from each .then().

## How It Works
Each .then() returns a new promise.
The next .then() waits for the previous one to resolve.
Errors at any step are caught by .catch().


# Example
function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve(`Success: ${data} saved!`);
    } else {
      reject("Failure: Weak connection. Data not saved.");
    }
  });
}

// Chaining Promises
saveToDB("First Data")
  .then((message) => { // message is our resolve(`Success: ${data} saved!`);
    console.log(message);
    return saveToDB("Second Data"); // Next save
  })
  .then((message) => {
    console.log(message);
    return saveToDB("Third Data"); // Next save
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => { // error is our reject("Failure: Weak connection. Data not saved.");
    console.log(error); // Handle any error
  });



### Output

If all succeed:
Success: First Data saved!
Success: Second Data saved!
Success: Third Data saved!


If one fails:
Failure: Weak connection. Data not saved.