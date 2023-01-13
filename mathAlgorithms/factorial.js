// FACTORIAL OF A NUMBER
// Problem statement:
//     Given an integer 'n', find the factorial (n!) of that integer.

const factorial = (n) => {
  let result = 1;
  for (let i = 1; i < n; i++) {
    result = result * (i+1);
  }
  return result;
}

console.log(factorial(0));  // 1
console.log(factorial(1));  // 1
console.log(factorial(2));  // 2
console.log(factorial(4));  // 24
console.log(factorial(5));  // 120

// O(n)