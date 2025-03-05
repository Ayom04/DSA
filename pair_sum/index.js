/**
 * pairSum -
 * @param {*} numbers  - array of numbers
 * @param {*} targetSum - the target sum of the numbers
 *
 * @return array - The indices of the two numbers that add up to the target sum.
 */
const pairSum = (numbers, targetSum) => {
  // Brute force approach
  // Time complexity: O(n^2)
  // Space complexity: O(1)
  //steps
  // 1. loop through the numbers array
  // 2. loop through the numbers array starting from i + 1
  // 3. check if the sum of the two numbers is equal to the target sum
  // 4. if it is, return the indices of the two numbers
  // 5. if it is not, continue to the next iteration
  // 6. if no two numbers add up to the target sum, return null

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == targetSum) return [i, j];
    }
  }
  return null;
};

// Example usage:
console.log(pairSum([1, 2, 3, 4, 5], 6)); // [0, 4]
console.log(pairSum([1, 2, 3, 4, 5], 10)); // null
console.log(pairSum([1, 2, 3, 4, 5], 7)); // [0, 3]
console.log(pairSum([1, 2, 3, 4, 5], 11)); // null
console.log(pairSum([1, 2, 3, 4, 5], 12)); // null
console.log(pairSum([1, 2, 3, 4, 5], 13)); // null

/**
 * pairSumUsingObj -
 * @param {*} numbers - Array of numbers
 * @param {*} targetSum  - the target sum of the numbers
 * @returns array - The indices of the two numbers that add up to the target sum.
 * Complexity:
 * Time: O(n)
 * Space: O(n)
 */

const pairSumUsingObj = (numbers, targetSum) => {
  //steps
  //0. create an object to store the previous numbers
  // 1. loop through the numbers array
  // 2. calculate the complement of the current number
  // 3. check if the complement is in the previous numbers object
  // 4. if it is, return the indices of the two numbers
  // 5. if it is not, add the current number to the previous numbers object
  // 6. if the complement is not in the previous numbers object, add the current number and its index to the previous numbers object
  // 7. if the complement is not in the previous numbers object, return null

  const previousNum = {};
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    const complement = targetSum - currentNum;
    if (complement in previousNum) return [previousNum[complement], i];
    previousNum[currentNum] = i;
  }
};
