  
  let myDate = new Date();

  console.log(myDate);//2024-09-16T15:44:49.641Z
  console.log(myDate.getTime());
  console.log(myDate.getFullYear());
  console.log(myDate.getMonth() + 1); //index 0 to 11 januray ->0th index and so on
  console.log(myDate.getDay());
  console.log(myDate.getSeconds());
  console.log(myDate.getHours());

  console.log(`Day is ${myDate.getDay()} and time is ${myDate.toTimeString()} month going is ${myDate.getMonth()+1} or year chlra hai ${myDate.getFullYear()}`);
  
  
 //------------------------------------------------------------------------------------------------------------------------------ 


  console.log(myDate.getMilliseconds());
  console.log(myDate.getSeconds());
  console.log(myDate.toDateString());//Mon Sep 16 2024
  console.log(myDate.toLocaleDateString());//16/9/2024
  console.log(myDate.toLocaleTimeString());//9:14:49 pm
  console.log(myDate.toString());//Mon Sep 16 2024 21:14:49 GMT+0530 (India Standard Time)
  console.log(myDate.toTimeString()); //21:14:49 GMT+0530 (India Standard Time)
  console.log(myDate.toISOString()); //2024-09-16T15:51:04.105Z
  console.log(myDate.toLocaleString()); //16/9/2024, 9:21:04 pm
  console.log(myDate.toUTCString())//Mon, 16 Sep 2024 15:54:05 GMT

//--------------------------------------------------------------------------------------------------------------------------------------------

let myCreatedDate = new Date(2024, 7, 20, 12, 0);
 let myCreatedDate2 = new Date("10-19-2024");
console.log(myCreatedDate2.toLocaleString());//Tue Aug 20 2024 12:00:00 GMT+0530 (India Standard Time)

//----------------------------------------------------------------------------------------------------------------------------------------------------

let myTimeStamp = Date.now();

//comperision of dates in milliseconds
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//to convert milliseconds to seconds
console.log(Date.now()/1000); //comes with float value inorder to avoid that use math.round()
console.log(Math.floor(Date.now()/1000));

//----------------------------------------------------------------------------------------------------------------------------------------------


let newDate = new Date();

//if we want to customise our date more 
newDate.toLocaleString( 'default',{
    weekday : "long",
    timeStyle : "short"
    

}
)









  
  




  