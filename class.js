class person {
  constructor(fn, ln, age) {
    this.firstname = fn;
    this.lastname = ln;
    this.age = age;
  }
  country = "India";
  fullname() {
    return this.firstname + " " + this.lastname;
  }
}

let vishal = new person("Vishal", "Bhat", 18);
console.log(vishal);
console.log(vishal.fullname());
