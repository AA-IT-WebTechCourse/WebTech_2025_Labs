// Spread and Rest Operators

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
const copy = [arr1, 5, 6]; 

const withExtra = [...arr1, 4, 5];
const numbers = [1, 5, 3, 9, 2];
console.log({ combined, copy, withExtra });


// Spread in Objects
const person = { name: "Alice", age: 30 };
const address = { city: "NYC", country: "USA" };
const fullProfile = { ...person, ...address };
const updated = { ...person, age: 31, email: "alice@example.com" };
console.log({ fullProfile, updated });

// Rest Operator
const [first, second, ...time] = [1, 2, 3, 4, 5];
console.log({ first, second, time });

// Rest in Objects
const user = { name: "Bob", age: 25, city: "LA", job: "Developer" };
const { name, age, ...otherInfo } = user;
console.log({ name, age, otherInfo });
