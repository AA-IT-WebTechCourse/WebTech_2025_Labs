// Hoisting - Variables, Functions, and Classes

// Variable Hoisting - var
console.log(x); // undefined (not error!)
var x = 5;
console.log(x);

// This is equivalent to:

// var x;
// console.log(x);
// x = 5;



// Variable Hoisting - let and const
console.log(y); // ReferenceError 
let y = 10;
console.log(y);
// console.log(z); // ReferenceError
const z = 15;
console.log(z);


// Function Hoisting - Declarations
sayHello(); 

function sayHello() {
  console.log("Hello!");
}

// Function Expression - var
// greet(); // TypeError (commented)

var greet = function() {
  console.log("Hi!");
};
greet();


// Function Expression - let/const
// welcome(); // ReferenceError
const welcome = function() {
  console.log("Welcome!");
};
welcome();

// Class Hoisting
// const p = new Person(); // ReferenceError

class Person {
  constructor(name) {
    this.name = name;
  }
}
