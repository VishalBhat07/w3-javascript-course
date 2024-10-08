let arr = [1, 4, 2, 6, 9];

console.log(arr);
console.log(arr.length);
console.log(arr instanceof Array);
console.log(Array.isArray(arr));

console.log(arr.toString());

console.log(arr[4]);
console.log(arr.at(4));

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
console.log(fruits.join(" - "));

console.log(fruits.pop());
fruits.push("Kiwi");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Watermelon");
console.log(fruits);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.copyWithin(2, 0);
console.log(fruits2);

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits3);

console.log(fruits3.indexOf("Lemon"));
