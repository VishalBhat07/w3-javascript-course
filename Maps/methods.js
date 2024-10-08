const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

console.log(fruits);

console.log(fruits.get("bananas"));

fruits.set("pineapple", 800);
console.log(fruits);
console.log(fruits.size);

let text = "";
fruits.forEach(function (value, key) {
  text += key + " = " + value + "\n";
});

console.log(text);
