let a = 2;

switch (a) {
  case 1:
    console.log();
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
  // code block
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day);
