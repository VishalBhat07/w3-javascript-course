let text = "Hello everyone";

console.log(text.length);

// Extracting String Characters

console.log(text.charAt(3));
console.log(text.charCodeAt(3));
console.log(text.at(3));

console.log(text.at(-3));

// Extracting String Parts

let fruits = "Apple, Banana, Kiwi";
console.log(fruits.slice(7, 13));
console.log(fruits.slice(7));
console.log(fruits.slice(-12, -6));
console.log(fruits.substring(7, 13));
console.log(fruits.substr(7, 6));

// Converting to Upper and Lower Case

let text1 = "     Hello World!";
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

// JavaScript String concat()

console.log(text1.concat(" ", "Vishal Bhat"));
console.log(text1.trim());

let text2 = fruits.repeat(10);
console.log(text2);

let text3 = "Please visit Microsoft and Microsoft!";
console.log(text3);
console.log(text3.replace("Microsoft", "W3Schools"));
console.log(text3.replace(/Microsoft/g, "W3Schools")); // Replace all matches
console.log(text3.replaceAll("Microsoft", "W3Schools"));

// String to Array

let str = "Vishal|Bhat";
console.log(str);
console.log(str.split());
console.log(str.split("|"));
console.log(str.split("|")[0]);
console.log(str.split("|")[1]);
