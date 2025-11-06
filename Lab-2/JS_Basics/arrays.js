// Arrays - Basics and Methods

// Creating Arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const empty = [];
const mixed = [1, "two", true, null, { key: "value" }];
console.log({ fruits, numbers, empty, mixed });

// accessing Elements by Index
console.log(fruits[0], fruits[2], fruits[10]); // undefined for index 10

// Array Properties
console.log("length:", fruits.length, "isArray:", Array.isArray(fruits));

// adding Elements
const fruitsCopy = [...fruits];
fruitsCopy.push("grape"); // ["apple", "banana", "orange", "grape"]
console.log(fruitsCopy);

// removing Elements
const last = fruitsCopy.pop();
const first = fruitsCopy.shift();
console.log("Removed:", last, first, "Remaining:", fruitsCopy);

// Searching elements
console.log("indexOf 'banana':", fruits.indexOf("banana"));
console.log("includes 'apple':", fruits.includes("apple"));


// for each Loop
fruits.forEach(fruit => console.log("  -", fruit));
