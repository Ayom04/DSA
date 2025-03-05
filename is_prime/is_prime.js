/**

 * isPrime -  returns true if the number is prime, false otherwise.
 * @param {*} n 
 * @returns boolean
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

const _isPrime = function (number) {
  // Time complexity: O(n)
  // Space complexity: O(1)
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
