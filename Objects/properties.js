let person = {
  firstName: "Vishal",
  lastName: "Bhat",
  age: 18,
  eye: "black",
};

// console.log(person);

// console.log(person["age"]);

person.country = "India";
console.log(person);

delete person.country;
console.log(person);

myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

console.log(myObj.myCars);

console.log(myObj.myCars.car1);
