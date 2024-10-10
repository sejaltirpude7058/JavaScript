
## javascript and classes
-- JavaScript and Classes:
  A class in JavaScript is a blueprint for creating objects. It contains properties (data) and methods (functions). Using classes helps organize and reuse code
- collection of properties and methods
- toLowerCase

-example
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const person1 = new Person('Sejal', 25);
person1.greet(); // "Hello, my name is Sejal."



## OOP
- OOP (Object-Oriented Programming):
OOP is a programming style where you create objects to model real-world entities. Each object has properties and methods to describe its behavior.



## Object
- Object:
An object is a collection of properties (variables) and methods (functions)
- example

const car = {
    make: 'Toyota',
    model: 'Camry',
    start: function() {
        console.log('Car is starting');
    }
};

console.log(car.make);  // 'Toyota'
car.start();  // 'Car is starting'



## why use OOP
- Why Use OOP?:
OOP helps organize code, making it easier to manage large projects.
Promotes code reusability by creating objects from blueprints (classes).
Helps break down complex problems into smaller, manageable pieces.



## parts of OOP

- Object Literal:
  An object created directly using curly braces {}.
- example :-

  const book = {
    title: 'JavaScript Basics',
    author: 'John'
};

- Constructor function
  A function used to create multiple similar objects.
  -example :-

  function Car(make, model) {
    this.make = make;
    this.model = model;
}
const car1 = new Car('Toyota', 'Corolla');


- Prototypes
  Prototypes allow objects to share methods and properties. Every JavaScript object has a prototype that defines shared behavior
- example :-

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal('Dog');
dog.speak();  // "Dog makes a noise."


- Classes
  A modern syntax to create objects in JavaScript (ES6)
  class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

- Instances (new, this)
  An instance is an object created from a class using the new keyword. this refers to the current instance of the class.
- example
const car2 = new Car('Honda', 'Civic');
console.log(car2.make);  // 'Honda'



## 4 pillars
- Abstraction
  Hiding the complex details and showing only the necessary features of an object. Example: A car object shows methods like start(), but hides how the engine works internally

- Encapsulation
  Keeping the data and the methods that operate on the data together, and restricting access to some

- example 
  class BankAccount {
    #balance = 0;  // Private variable

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}


- Inheritance
  Creating a new class from an existing class, sharing properties and methods. 

- example :-
  
  class Animal {
    eat() {
        console.log('Eating');
    }
}

class Dog extends Animal {
    bark() {
        console.log('Barking');
    }
}

const myDog = new Dog();
myDog.eat();  // "Eating"
myDog.bark(); // "Barking"



- Polymorphism
  Objects of different classes can be treated as objects of a common superclass. It allows different classes to use the same method names but behave differently.

- example :-

class Animal {
    makeSound() {
        console.log('Some sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Bark');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Meow');
    }
}

const animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.makeSound());  // "Bark", "Meow"
