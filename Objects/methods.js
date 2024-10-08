let person = {
  firstName: "Vishal",
  lastName: "Bhat",
  age: 18,
  eye: "black",

  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// console.log(person);

// console.log(person["age"]);

person.country = "India";
console.log(person);

// name1 = person.fullName();
// console.log(name1);

person.name1 = function () {
  return this.firstName + " " + this.lastName;
};d
