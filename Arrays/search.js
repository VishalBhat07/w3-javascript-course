const numbers = [4, 9, 16, 25, 29, 100];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(numbers);
console.log(first);

console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);

let arr = [1, 4, 2, -100, 45];
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));
