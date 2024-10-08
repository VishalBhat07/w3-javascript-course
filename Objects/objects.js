const person = {
  firstName: "Vishal",
  lastName: "Bhat",
  age: 18,
  eyeColor: "black",

  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Adding a new property

person.location = "India";

console.log(person);
console.log(person.fullName());

// Using new keyword

const car = new Object();

car.name = "i20 Active";
car.color = "White";
car.type = "Sedan";

console.log(car);

console.log(car["name"]);
console.log(car["color"]);
console.log(car["type"]);

const x = car;

x.color = "black";

console.log(car);
console.log(x);

