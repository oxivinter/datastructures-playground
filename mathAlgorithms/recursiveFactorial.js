// FACTORIAL OF A NUMBER - RECURSIVE
// Problem statement:
//     Given an integer 'n', find the factorial (n!) of that integer.

const factorial = (n) => {
  if (n == 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
