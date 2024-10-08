let items = ["apple", "banana", "mango", 6];
console.log(items);
console.log(typeof items);

const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);

let str = cars.toString();
console.log(str);

let arr = [1, 6, 5, 3, 6];
console.log(arr.sort());
console.log(`Length of arr : ${arr.length}`);

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

arr.push(7);
console.log(arr);

const age = new Array(23, 67, 3, 10);
console.log(age);

const newArray = new Array(100);
// Craetes an array with 100 undefines elements
console.log(newArray);

const a = { apple: 1, banana: 2 };
const b = [1, 2];

console.log(typeof a);
console.log(typeof b);

console.log(Array.isArray(a));
console.log(Array.isArray(b));

console.log(a instanceof Array);
console.log(b instanceof Array);

const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

console.log(myObj);
console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.cars);
console.log(myObj.cars[0].name);
console.log(myObj.cars[1].name);
console.log(myObj.cars[2].name);
