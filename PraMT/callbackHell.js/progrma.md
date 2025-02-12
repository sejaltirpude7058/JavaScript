The savetoDB function simulates saving data to a database.
It checks internet speed (a random number between 1 and 10):
If internet speed > 4, the success callback is executed.
Otherwise, the failure callback is executed.
Key Components in the Code
savetoDB(data, success, failure):

Takes three arguments:
data: The data to be saved.
success: Function to execute if saving succeeds.
failure: Function to execute if saving fails.
Nested savetoDB Calls:

If the first save is successful, the second save is attempted.
This process repeats for three levels of nested saves.
If any save fails, the corresponding failure function runs, stopping that branch of execution.


Dry Run

Step 1: First savetoDB Call
savetoDB("first data", successCallback1, failureCallback1);
A random internetSpeed is generated.

If internetSpeed > 4, run successCallback1:
console.log("success: Your data was Successfully saved 1");
Then, proceed to the second savetoDB call.

Otherwise, run failureCallback1:
console.log("failure: Weak connection. Data was not saved.");
Execution stops here for this branch.

Step 2: Second savetoDB Call
savetoDB("Second Data", successCallback2, failureCallback2);
Another internetSpeed is generated.

If internetSpeed > 4, run successCallback2:
console.log("success: Data saved successfully 2");
Then, proceed to the third savetoDB call.

Otherwise, run failureCallback2:
console.log("failure: Weak connection. Data was not saved 2.");
Execution stops here for this branch.

Step 3: Third savetoDB Call
savetoDB("third Data", successCallback3, failureCallback3);
A third internetSpeed is generated.


If internetSpeed > 4, run successCallback3:
console.log("success: Data saved successfully 3");

Otherwise, run failureCallback3:
console.log("failure: Weak connection. Data was not saved 3.");
Callback Chain Example


## If all three saves succeed:
success: Your data was Successfully saved 1
success: Data saved successfully 2
success: Data saved successfully 3


## If the second save fails:
success: Your data was Successfully saved 1
failure: Weak connection. Data was not saved 2

## If the first save fails:
failure: Weak connection. Data was not saved


## Key Takeaway
Callbacks in Chain: Each success callback calls another savetoDB.
Failure Stops Execution: Any failure skips the remaining nested callbacks.
This structure is an example of callback hell, as it creates deeply nested code. You can improve this with Promises or Async/Await.