let nums = [1, 4, 5, 2, 7];

// For loop
for (let i = 0; i < nums.length; i++) console.log(nums[i]);

// For-in loop is used for objects
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x] + " ";
}

console.log(text);

// For-of loop
for (const element of nums) {
  console.log(element);
}

// While
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let str = "";

while (cars[i]) {
  str += cars[i] + " ";
  i++;
}
console.log(str);
