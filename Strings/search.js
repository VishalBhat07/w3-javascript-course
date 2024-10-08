let text = "Please locate where 'locate' occurs!";

console.log(text.indexOf("locate"));
console.log(text.lastIndexOf("locate"));

let text1 = "The rain in SPAIN stays mainly in the plain";
console.log(text1.match(/ain/g));
console.log(Array.from(text1.matchAll("ain")));

let text2 = "Hello world, welcome to the universe.";
console.log(text2.includes("world"));
console.log(text2.startsWith("Hello"));
console.log(text2.startsWith("hello"));
console.log(text2.endsWith("universe."));
console.log(text2.endsWith("universe"));
