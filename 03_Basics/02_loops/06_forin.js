let myMap = new Map();

myMap.set("js", "JavaScript")
myMap.set("cpp", "C++")
myMap.set("java" , "Java")

for(let [item, values] of myMap){
   // console.log(`${item} is an file extension of ${values}`);
    
}

for(let item in myMap){
    console.log(item);   
} //no output for in loop does not works on map


//for in loop works on object

let programming = {
    ".js" : "JavaScript",
    ".java" : "Java",
    ".cpp" : "C++",
    ".py" : "Python",
    ".html" : "HTML",
}

for(let key in programming){
   // console.log(`${key} is an file extension of ${programming[key]}`);
    
}

//for in loop in arrays
let course = ["Data Science", "C++ Programming", "Java for Begineers"];

for(let index in course){
    console.log(course[index]);
    
}