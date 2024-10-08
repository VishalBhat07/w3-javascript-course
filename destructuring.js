// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

// Destructuring
// let { firstName, lastName } = person;
let { firstName, lastName: lname, country = "US" } = person;
console.log(person);
console.log(firstName);
// console.log(lastName);
console.log(lname);
console.log(country);

const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a, b, ...rest] = numbers;

console.log(rest);
