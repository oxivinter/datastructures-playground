// FIBONACCI SEQUENCE
// Problem statement:
//     Given a number 'n', find the first 'n' elements of the Fibonacci sequence.

const fibonacci = (n) => {
  const array = [0, 1];
  for (let i = 2; i < n; i++) {
    array[i] = array[i-1] + array[i-2];
  }
  return array;
} 

console.log(fibonacci(2));  // [0, 1]
console.log(fibonacci(5));  // [0, 1, 1, 2, 3]
console.log(fibonacci(7));  // [0, 1, 1, 2, 3, 5, 8]

// O(n)