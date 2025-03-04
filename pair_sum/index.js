/**
 * pairSum -
 * @param {*} numbers  - array of numbers
 * @param {*} targetSum - the target sum of the numbers
 *
 * @return array - The indices of the two numbers that add up to the target sum.
 */
const pairSum = (numbers, targetSum) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < targetSum.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        return [i, j];
      }
    }
  }
  return array_indices;
};

// Example usage:
console.log(pairSum([1, 2, 3, 4, 5], 6)); // [0, 4]
console.log(pairSum([1, 2, 3, 4, 5], 10)); // null
console.log(pairSum([1, 2, 3, 4, 5], 7)); // [0, 3]
console.log(pairSum([1, 2, 3, 4, 5], 11)); // null
console.log(pairSum([1, 2, 3, 4, 5], 12)); // null
console.log(pairSum([1, 2, 3, 4, 5], 13)); // null

// Using a Set for faster lookup
const pairSumUsingSet = (numbers, targetSum) => {
  const previousNum = {};
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    const complement = targetSum - currentNum;
    if (complement in previousNum) return [previousNum[complement], i];
    previousNum[currentNum] = i;
  }
};
