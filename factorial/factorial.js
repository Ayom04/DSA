// function that calculates the factorail of a number
// create a function and pass the parameeter n
// create a variable total to store the factorial value and intialize it with 1
// if n is less thatn or equal to 1, return 1
// create a
// loop through the numbers from 2 to n and multiply it by the factorial
// return the factorial
// time complexity is O(n)
// space complexity is O(1)

const factorial = function (n) {
  let total = 1;
  if (n <= 1) return 1;
  for (let i = 2; i <= n; i++) {
    total *= i;
  }
  return total;
};

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(3)); // 6
console.log(factorial(2)); // 2

// function that calculates the factorial of a number using recursion
// create a function and pass the parameter n
// if n is less than or equal to 1, return 1
// return n * the factorial of n - 1
// time complexity is O(n)
// space complexity is O(n)

const factorialRecursive = function (n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
};

console.log(factorialRecursive(5)); // 120
console.log(factorialRecursive(4)); // 24
console.log(factorialRecursive(3)); // 6
