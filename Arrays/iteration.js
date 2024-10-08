let arr = [1, 2, 3, 4, 5];

let newArr = arr.map(myFunction);

function myFunction(value, index, array) {
  return value * value;
}

console.log(arr);
console.log(newArr);

let newArr2 = arr.flatMap((x) => x * x * x);
console.log(newArr2);

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18);

const nums = [45, 4, 9, 16, 25];
let sum = nums.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log(sum);

let data = Array.from("ABCDEFG");
console.log(data);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  console.log(x);
}

const entries = fruits.entries();

for (let x of entries) {
  console.log(x);
}

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
