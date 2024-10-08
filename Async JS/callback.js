sum = (a, b) => console.log(a + b);

function calculator(a, b, sumCallBack) {
  return sumCallBack(a, b);
}

calculator(5, 3, sum);
