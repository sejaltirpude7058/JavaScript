/*
Call Stack in JavaScript
The call stack is a fundamental concept in JavaScript used to keep track of function calls. 
Think of it as a stack of plates, where each plate represents a function that is being executed. 


Function Calls:

When a function is called, a new "plate" (execution context) is placed on top of the stack.
The call stack tracks the sequence in which functions are called.
Function Returns:

When a function finishes executing, it is removed from the top of the stack.
Control is then passed back to the previous function on the stack.
Managing Execution:

The stack follows a Last In, First Out (LIFO) order: the most recently called function is executed
 first.
If a function calls another function, the new function’s execution context is added to the 
top of the stack.

Errors:

If the stack grows too large (for example, due to too many nested function calls), it can result
 in a "stack overflow" error.

 */

// Example of Call Stack in Action
// Here’s a simple example:
function first() {
    second();
    console.log("First function");
}

function second() {
    third();
    console.log("Second function");
}

function third() {
    console.log("Third function");
}

first();


/*
When first() is called, it’s added to the call stack.
first() calls second(), so second() is added to the stack.
second() calls third(), adding third() to the stack.
third() executes and is removed from the stack.
Control returns to second(), which completes and is removed from the stack.
Finally, first() completes and is removed from the stack.

Visualization of the Call Stack
Initial State:

Stack is empty.
Call to first():

first() is added to the stack.
Call to second():

second() is added on top of first().
Call to third():

third() is added on top of second().
Return from third():

third() is removed.
Stack now has second() on top.
Return from second():

second() is removed.
Stack now has first() on top.
Return from first():

first() is removed.
Stack is empty again.

Summary
The call stack is like a stack of plates where each plate is a function call.
Functions are added to the top of the stack as they are called and removed when they finish.
The stack helps keep track of the order in which functions should execute and return.
*/