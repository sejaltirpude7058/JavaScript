let greeting = function(){
    console.log(`Good Morning!!`);
    
}


for(let i = 1; i<=10; i++){
  //  greeting();
}


//print table using for loop

for(let i=1; i<=10; i++){
    //console.log(`Table of ${i}`);
    
   for(let j=1; j<=10; j++){
    //console.log(`${i} *  ${j} =  ${i*j}`);
    
   }
}

//find x element in your array

const x = 5;
const arr = new Array(2,4,7,6,5,1);
let check = false //considering no missing element
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element==x){
        check = true;
        break;
    }
}
if(check==true) console.log(`Yes ${x} is present in given array`);
else console.log(`Not Found`);








