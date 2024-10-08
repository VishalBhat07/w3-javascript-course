let x = myFunction(4, 3);

function myFunction(a, b) {
  // Function returns the product of a and b
  return a * b;
}

console.log(x);

function fib(n) {
  if (n == 1) return 0;

  if (n == 2) return 1;

  return fib(n - 1) + fib(n - 2);
}
