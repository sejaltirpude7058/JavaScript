//The forEach() method of Array instances executes a provided function once for each array element

let myArr = [1,2,3,4,5,6,7,8];

myArr.forEach(  function(element){
    // console.log(element);
     
} )


let myObj = {
    "name" : "sejal",
    "rollNo" : 23,
    "class" : "8th semester"
} //not works on object

const course = new Array(
    {name : "Sejal",
    "rollNo" : 23,
    "class" : "8th semester"
    },

    {
        name : "Anamika",
        "rollNo" : 12,
        "class" : "3rd semester"
    },
    {
        name : "Jhanvi",
        "rollNo" : 110,
        "class" : "6th semester"

    },
    {
        name : "Ovi",
        "rollNo" : 78,
        "class" : "2nd semester"

    },
    {
        name : "Faraz",
        "rollNo" : 19,
        "class" : "4th semester"
    },
    {
        name : "Samiksha",
        "rollNo" : 20,
        "class" : "7th semester"
    }
)

// course.forEach( (element) => //(console.log(`${element["name"]} is in ${element["class"]}`)
// ));

let coding = new Array(
    {
        language : "Java",
        languageFileExtenstion : ".java"
    },
    {
        language : "JavaScript",
        languageFileExtenstion : ".js"
    },
    {
        language : "C++ Programming",
        languageFileExtenstion : ".cpp"
    },
    {
        language : "Python",
        languageFileExtenstion : ".py"
    },
    {
        language : "HTML",
        languageFileExtenstion : ".html"
    }
   
);

// coding.forEach( (element, index, myArr) => (console.log(element, index, myArr)
// ) )


//suppose we already have one with us
function printme(myArr){
//console.log(myArr);
}
//we just need to give refernce as parameter
coding.forEach(printme);



let myNumbers = new Array(45,2,46,32,212,67,8,753,21,24,3,54,68);
let newArr = new Array();

myNumbers.forEach( (num) => {
    if(num > 45){
        newArr.push(num);
    }
} )

console.log(newArr); // [ 46, 212, 67, 753, 54, 68 ]

