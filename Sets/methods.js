let s = new Set([1, 2, 3, 4, 5]);

s.add(6);
s.add(6);
s.add(7);
console.log(s);

console.log(s.has(5));
console.log(s.has(-8));

let text = "";
s.forEach(function (value) {
  text += value + " ";
});

console.log(text);

const iter = s.values();

for (const key of iter) {
  console.log(key);
}
