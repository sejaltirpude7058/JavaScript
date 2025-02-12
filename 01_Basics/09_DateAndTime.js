  
//   let myDate = new Date();

//   console.log(myDate);//2024-09-16T15:44:49.641Z
//   console.log(myDate.getTime());
//   console.log(myDate.getFullYear());//2024
//   console.log(myDate.getMonth() + 1); //index 0 to 11 januray ->0th index and so on
//   console.log(myDate.getDay());// not the day of month its day of week
//   console.log(myDate.getSeconds());
//   console.log(myDate.getHours());

//   console.log(`Day is ${myDate.getDay()} and time is ${myDate.toTimeString()} month going is ${myDate.getMonth()+1} or year chlra hai ${myDate.getFullYear()}`);
  
  
//  //------------------------------------------------------------------------------------------------------------------------------ 


//   console.log(myDate.getMilliseconds());
//   console.log(myDate.getSeconds());
//   console.log(myDate.toDateString());//Mon Sep 16 2024
//   console.log(myDate.toLocaleDateString());//16/9/2024
//   console.log(myDate.toLocaleTimeString());//9:14:49 pm
//   console.log(myDate.toString());//Mon Sep 16 2024 21:14:49 GMT+0530 (India Standard Time)
//   console.log(myDate.toTimeString()); //21:14:49 GMT+0530 (India Standard Time)
//   console.log(myDate.toISOString()); //2024-09-16T15:51:04.105Z
//   console.log(myDate.toLocaleString()); //16/9/2024, 9:21:04 pm
//   console.log(myDate.toUTCString())//Mon, 16 Sep 2024 15:54:05 GMT

// //--------------------------------------------------------------------------------------------------------------------------------------------

// let myCreatedDate = new Date(2024, 7, 20, 12, 0);
//  let myCreatedDate2 = new Date("10-19-2024");
// console.log(myCreatedDate2.toLocaleString());//Tue Aug 20 2024 12:00:00 GMT+0530 (India Standard Time)

// //----------------------------------------------------------------------------------------------------------------------------------------------------

// let myTimeStamp = Date.now();

// //comperision of dates in milliseconds
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// //to convert milliseconds to seconds
// console.log(Date.now()/1000); //comes with float value inorder to avoid that use math.round()
// console.log(Math.floor(Date.now()/1000));

//----------------------------------------------------------------------------------------------------------------------------------------------


let newDate = new Date();

//if we want to customise our date more 
newDate.toLocaleString( 'default',{
    weekday : "long",
}
)

// // -------------------------------------------------------------------------------------------------
// // 2. Set Methods

// // setFullYear(year): Sets the year.
// date.setFullYear(2025);
// console.log(date); // Modified year: 2025


// // setMonth(month): Sets the month (0-11).
// date.setMonth(0); // January

// //setDate(day), setHours(), setMinutes(), setSeconds(), setMilliseconds():
// date.setDate(1);
// date.setHours(12);
// console.log(date); // Updated date and time

// // ------------------------------------------------------------------------------------------------

// 3. Conversion Methods

// // toTimeString(): Converts time to a string.
// console.log(date.toTimeString()); // Example: "10:30:00 GMT+0530 (India Standard Time)"

// //toUTCString(): Converts the date to a UTC string.
// console.log(date.toUTCString()); // Example: "Fri, 15 Nov 2024 05:00:00 GMT"

// // toJSON(): Converts the date to a JSON string (same as toISOString()).

// console.log(date.toJSON()); // Example: "2024-11-15T10:30:00.000Z"

// --------------------------------------------------------------------------------------------------

// 4. Static Methods
// Date.now(): Returns the current timestamp.
console.log(Date.now()); // Example: 1732007400000

// Date.parse(dateString): Parses a date string and returns the timestamp.
console.log(Date.parse("2024-11-15")); // Example: 1732007400000


// Date.UTC(year, month, day, hours, minutes, seconds): Creates a UTC timestamp.
console.log(Date.UTC(2024, 10, 15)); // Example: 1732007400000

// -------------------------------------------------------------------------------------------------

console.log(new Date(0).toDateString()); //1 jan
console.log(new Date(3 * 24 * 60 * 60 * 1000).toDateString());// 3 days passed 4 jan

// --------------------------------------------------------------------------------------------------
/*
 * What is a Timestamp?
A timestamp represents the number of milliseconds that have passed since January 1, 1970, 00:00:00 UTC (also called the Unix Epoch). It is commonly used in programming to track and manipulate dates and times.

Why Use Timestamps?
To store dates in a consistent and universal format.
Useful for calculations like finding time differences, scheduling, or logging events. 
 
 */


// converting timestamp to date
const now = Date.now(); // Current timestamp
console.log(now); // Example: 1732007400000 (milliseconds since Jan 1, 1970)

// Converting timestamp to date
const date = new Date(now);
console.log(date); // Example: "Fri Nov 15 2024 15:30:00 GMT+0530"




const eventTime = Date.parse("2024-12-01T10:00:00Z"); // Event date
const currentTime = Date.now();
const timeLeft = eventTime - currentTime; // Time difference in milliseconds
console.log(
  `Time left for the event: ${Math.floor(timeLeft / 1000 / 60)} minutes`
);

const orderPlaced = Date.now();
console.log(`Order placed on: ${new Date(orderPlaced).toDateString()}`);

const messageTime = Date.now();
console.log(`Message sent at: ${new Date(messageTime).toLocaleTimeString()}`);


const fileModifiedTime = Date.now();
console.log(`File last modified at: ${new Date(fileModifiedTime).toLocaleString()}`);


// APIs (Request and Response Tracking)

// Use: Timestamps are included in API requests to track when data was sent/received.
// Example:
const requestTimestamp = Date.now();
console.log(`API Request sent at: ${new Date(requestTimestamp)}`);


function calcDaysPassed(date_1, date_2){
  return Math.abs(date_1 - date_2) /(1000* 60 * 60 * 24); //calculating both date's timestamp difffrence and dividing (miliseconds * seconds * minutes * hrs ) to get how many days passed
}

let nofday = calcDaysPassed(new Date(2024, 10, 22), new Date(2024, 10, 12));

console.log(` number of days passed are ${nofday}`);

  
  




  