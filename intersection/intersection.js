/**
 * intersection - that takes in two arrays, a,b, as arguments.
 * The function should return a new array containing elements that are in both of the two arrays.
 * * @example
 * intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]) // returns [2, 6]
 *
 * @param {*} a - array a
 * @param {*} b - array b
 * @returns  {Array} - The intersection of the two arrays.
 * * Complexity:
 * Time: O(n * m) where n is the length of array a and m is the length of array b.
 * Space: O(n) where n is the length of the result array.
 */
const intersection = (a, b) => {
  // create an array to store the results
  // map through the  array, a
  // if the iterate is in the array b.
  // push it into the array
  const res = [];
  a.forEach((item) => {
    if (b.includes(item)) {
      res.push(item);
    }
  });
  return res;
};

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]));
console.log(intersection([1, 2, 3], [4, 5, 6])); // []
console.log(intersection([1, 2, 3], [3, 2, 1])); // [1, 2, 3]
console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(intersection([1, 2, 3], [1, 2, 3])); // [1, 2, 3]
console.log(intersection([1, 2, 3], [5, 6, 7]));

/**
 *
 * @param {*} a
 * @param {*} b
 * @returns
 * * Complexity:
 * Time: O(n + m) where n is the length of array a and m is the length of array b.
 * Space: O(n) where n is the length of the result array.
 */
const _intersection = (a, b) => {
  const result = [];
  const items = new Set();
  for (let item of a) {
    items.add(item);
  }
  for (let element of b) {
    if (items.has(element)) {
      result.push(element);
    }
  }
  return result;
};
