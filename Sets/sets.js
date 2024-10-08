let s = new Set([1, 2, 3, 4, 5]);

console.log(typeof s);
console.log(s);

const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);

let text = "";
for (const element of letters) {
  text += element + " ";
}
console.log(text);
