/**
 * Euclidean Algorithm
 * EuclideanGCD is a recursive function that uses the Euclidean
 *       Algorithm to find the greatest common divisor
 * and it states that GCD od the two numbers won't change
 *  if the larger number is replaced by the difference between
 *  the larger number and the smaller number
 * @param {number} a - First number
 * @param {number} b - Second number
 * return the greatest common divisor of a and b
 */
// find the absolute of the 2 numbers becasue a negative value might be passed
// check if the a and b are 0, then return NULL
// if a is zero then B is the GCD
// if b is zero then a ids the GCD
// an if-else statement is needed to check the bigger one
// we will be subtracting the smaller one from the bigger one

const EuclideanGCD = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  if (a == 0 && b == 0) return NULL;

  if (a == 0 && b != 0) return b;
  if (a != 0 && b == 0) return a;

  if (a > b) {
    return EuclideanGCD(a - b, b);
  }
  return EuclideanGCD(b - a, a);
};

console.log(EuclideanGCD(60, 48)); // 12
console.log(EuclideanGCD(98, 56)); // 14
console.log(EuclideanGCD(100, 100)); // 100
console.log(EuclideanGCD(18, 24)); // 6
console.log(EuclideanGCD(10, 20)); // 10
console.log(EuclideanGCD(0, 0)); // NULL
