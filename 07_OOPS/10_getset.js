class Student {
    
    // Constructor initializes the properties of the class when an object is created
    constructor(id, name, branch, college_id, semester){
        this.id = id;
        this.name = name;
        this.branch = branch;
        this.college_id = college_id;
        this.semester = semester; // Here the 'setter' function for 'semester' is automatically called
    }  

    // Getter for 'semester' property
    get semester(){
        return  this._semester; // Returning the private property '_semester'
    }

    // Setter for 'semester' property
    set semester(value) {
        if (value < 1 || value > 8) {
            console.log('Invalid semester, must be between 1 and 8');
        } else {
            this._semester = value; // Only set if valid
            //// Setting the private property '_semester' with the provided value
        }
    }

    get name(){
        return `${this._name.toUpperCase()}`;
    }

    set name(value){
        this._name = value;
        
    }
    
 
}

// Creating a new student object
let student_1 = new Student(1, "ayush", 'ETC', "ybtech23", 10);
console.log(student_1.college_id); // Output: "ybtech23"

// Accessing the semester property using the private '_semester' directly
console.log(student_1._semester); // Output: 5

console.log(student_1.name);






















/**
 Getter and setter methods in JavaScript are used to control how you access and modify the values of object properties. Instead of directly accessing or modifying a property, we use these methods to add some logic or validation if needed.

Getter and Setter in Simple English + Hinglish Mix:
Getter:
A getter method lets you read or access a property, but without directly exposing that property. Matlab agar aapko semester ka value lena hai, you use the get method.

Example:
Jab student_1.semester likhte ho, getter function chalta hai aur this._semester ka value return karta hai.

Why Use Getters?
Getters ka use tab hota hai jab aapko koi property read karte waqt kuch extra logic add karni ho. Jaise agar aapko koi validation ya specific output dikhana hai.

Setter:
A setter method lets you change or modify a property, but with some control. Matlab directly property ko set nahi kar rahe, balki setter function ko use kar rahe.

Example:
Jab student_1.semester = 5 likhte ho, setter function chalke this._semester ko update karta hai.

Why Use Setters?
Setters ka use tab hota hai jab aapko koi property set karte waqt validation ya additional logic lagani ho. Jaise agar aap chahte ho ki property ka value specific range ke andar ho ya kuch restrictions apply karna ho

Private variables: In your code, this._semester is a private property, meaning it's not directly exposed to the outside. We use _ as a convention to show that it's a private property.

Using the getter: student_1.semester will call the get semester() method.

Using the setter: this.semester = 5 (inside the constructor) calls the set semester(value) method.
 */



