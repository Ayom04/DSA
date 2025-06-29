/**
 * Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty.
 */

/**
 * maxValue - function to get the maximum value in an array of numbers.
 * @param {array} nums - array of numbers
 * returns the maximum value in the array
 */

const maxValue = (nums) => {
  // Steps:
  // 1. create a variable to store the minimum value
  // 2. loop through the numbers array
  // 3. check if the current number is greater than the minimum value
  // 4. if it is, update the minimum value
  // 5. return the minimum value
  let minimumValue = -Infinity;

  for (let num of nums) {
    if (num > minimumValue) {
      minimumValue = num;
    }
  }
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] > minimumValue) {
  //       minimumValue = nums[i];
  //     }
  //   }
  return minimumValue;
};

console.log(maxValue([4, 5, 1, 3])); // 5
console.log(maxValue([10, 20, 30, 40])); // 40
console.log(maxValue([100, 50, 200])); // 200
console.log(maxValue([1])); // 1
console.log(maxValue([3, 2, 1])); // 3
console.log(maxValue([0, -10, -20, -30])); // 0
