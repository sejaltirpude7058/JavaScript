let arr= [1,2,3,4,5,6,7];
//the rest must be the last
const [a, b, c,  ...others] = arr;


console.log(a, b, c, others);

let myOb1 = {
  1: "s",
  2: "e",
  3: "j",
};

let myOb2 = {
  4: "a",
  5: "l",
};


let {1 : idx} = myOb1;//destructuring

console.log(idx); //s

const {1 : index1, ...otherIndexs} =  myOb1;
console.log(index1, otherIndexs);


function sum(...numbers){
   let sum = 0;
   for(let i=0; i<numbers.length; i++){
    sum += numbers[i]
   }
   return sum;
}

sum(1,2,3,4);


console.log(sum(1,2,3,4));
console.log(sum(1,2,1,2,1,1,2));


