// Functions - All Types

// Function Declaration
function greet(name) {// when passed in react also known as props
  return `Hello, ${name}!`;
}

// Function with Default Parameters
function introduce(name = "Guest", age = 18) {
  return `I'm ${name}, ${age} years old`;
}


// Function Expressions
const multiply = function(a, b) {
  return a * b;
};


// Arrow Functions
const add = (a, b) => {
  return a + b;
};

