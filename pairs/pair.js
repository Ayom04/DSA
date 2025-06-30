/**
 * pairs - This function takes an array of elements and returns an array of all unique pairs of those elements.
 * Each pair is represented as an array containing two unique elements.
 * @param {*} elements
 * @returns
 */
const pairs = (elements) => {
  let result = [];
  for (let i = 0; i < elements.length; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      result.push([elements[i], elements[j]]);
    }
  }
  return result;
};

console.log(pairs(["a", "b", "c", "d"]));
console.log(pairs([1, 2, 3, 4]));
console.log(pairs(["apple", "banana", "cherry"]));
console.log(pairs([true, false, true]));
