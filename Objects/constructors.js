function Person(first, last, age, eye, lang) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.lang = "English";
}

// Create a Person object
const student = new Person("Vishal", "Bhat", 18, "black", "Hindi");

console.log(student);
