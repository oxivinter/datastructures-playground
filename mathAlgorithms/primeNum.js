// PRIME NUMBER
// Problem statement:
//     Given an natural number 'n', determine if the number is prime or not.

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  if (n < 2) {
    return false;
  }
  return true;
}

console.log(isPrime(1));  // false, 1 is not a prime number
console.log(isPrime(2));  // true
console.log(isPrime(4));  // false
console.log(isPrime(7));  // true
console.log(isPrime(12));  // false