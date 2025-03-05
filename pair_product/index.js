/**
 * pairProduct -
 * @param {*} numbers
 * @param {*} targetProduct
 * @returns - The indices of the two numbers that multiply to the target product.
 * Complexity:
 * Time: 0(n^2)
 * Space: 0(1)
 */
const pairProduct = (numbers, targetProduct) => {
  // Brute force approach
  //steps
  // 1. loop through the numbers array
  // 2. loop through the numbers array starting from i + 1
  // 3. check if the product of the two numbers is equal to the target product
  // 4. if it is, return the indices of the two numbers
  // 5. if it is not, continue to the next iteration
  // 6. if no two numbers multiply to the target product, return null
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] == targetProduct) return [i, j];
    }
  }
  return null;
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3])
console.log(pairProduct([4, 6, 8, 2], 16)); // -> [2,3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [0, 2]
console.log(pairProduct([3, 2, 5, 4, 1], 3)); // -> [0, 4]
