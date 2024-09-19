
let userAge = 20;

if(userAge >= 18){
    console.log(`Eligible for making account`);  
}else{
    console.log(`Not eligible`);   
}


let isUserLoggedIn = false;
let debitCard = true;
let isLoggedInFromGoogle = false;
let isLoggedInFromEmail = false;

if(isLoggedInFromGoogle || isLoggedInFromEmail){
    isUserLoggedIn = true;
    console.log(`User logged in`);   
}else{
    console.log(`User has not logged in yet`);
    
}

if (isUserLoggedIn && debitCard ){
    console.log(`User can buy course`);
}


//grading of students

let marks = 58;
if(marks <= 100 && marks >91 ){
    console.log(` ${marks}% remark: Exellent Performance `);
}
else if(marks <= 90 && marks >81 ){
    console.log(` ${marks}% remark: Very Good `);
}
else if(marks <= 80 && marks >71 ){
    console.log(` ${marks}% remark: Good `);
}
else if(marks <= 70 && marks >61 ){
    console.log(` ${marks}% remark: Satisfactory `);
}
else if(marks <= 60 && marks >51 ){
    console.log(` ${marks}% remark: Can Do Better `);
}
else if(marks <= 50 && marks >=35 ){
    console.log(` ${marks}% remark: Poor `);
}
else console.log(`fail`);

