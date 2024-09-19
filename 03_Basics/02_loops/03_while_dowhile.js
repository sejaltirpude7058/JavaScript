
//While loop

let index = 1;
while(index<=20){
    const element = index;
    if(element%2==0){
        console.log(`${element} is even number`);
    }else{
        console.log(`${element} is odd number`);    
    }
index++;
}

const arr1 = ["s", "e", "j", "a", "l"];
let i=0;
while(i < arr1.length){
    console.log(arr1[i]);
    i++;
}

// do While loop
 let score = 60;
 do{
    console.log(`Score is ${score}`);
    score +=10;
 }while(score <=50)