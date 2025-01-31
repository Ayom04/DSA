/**

 * isPrime -  returns true if the number is prime, false otherwise.
 * @param {*} n 
 * @returns boolean
 */

const isPrime = (n) => {
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
