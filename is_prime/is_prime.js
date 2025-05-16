/**

 * isPrime -  returns true if the number is prime, false otherwise.
 * @param {*} n 
 * @returns boolean
 * Complexity: 
 * Time: O(sqrt(n))
 * Space: O(1)
 */

const isPrime = (n) => {
  // steps
  // 1. if the number is less than or equal to 1, return false.
  // 2. check if the number is divisible by any number from 2 to the square root of the number.
  // 3. if it is divisible by any number, return false.
  // 4. if it is not divisible by any number, return true.

  if (n <= 1) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(13)); // true
console.log(isPrime(15)); // false
console.log(isPrime(23)); // true

/**
 * _isPrime - returns true if the number is prime, false otherwise.
 * @param {*} number - The number to check if it is prime.
 * @returns  boolean - true if the number is prime, false otherwise.
 * Complexity:
 * Time: O(n)
 * Space: O(1)
 */
const _isPrime = function (number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(_isPrime(2)); // true
console.log(_isPrime(4)); // false
console.log(_isPrime(13)); // true
