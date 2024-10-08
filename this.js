// let person = {
//   firstname: "Vishal",
//   lastname: "Bhat",
//   age: 18,
//   eyes: "black",

//   fullname: function () {
//     return this.firstname + " " + this.lastname;
//   },
// };

// console.log(person);
// console.log(person.fullname());

// console.log(typeof this);

const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

// Return "John Doe":
console.log(person1.fullName.call(person2));
