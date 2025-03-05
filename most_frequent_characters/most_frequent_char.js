/**
 * mostFrequentChar - This function should return the most frequent character in a string.
 * @param {*} string  - The string to check for the most frequent character
 * @returns {string} - The most frequent character in the string
 * Complexity:
 * TIme: 0(n)
 * Space: 0(n)
 */
const mostFrequentChar = (string) => {
  //steps
  // 1. create an object to store the count of each character
  // 2. loop through the string
  // 3. check if the character is in the count object
  // 4. if it is not, add the character to the count object
  // 5. if it is, increment the count of the character
  // 6. create a variable to store the most frequent character
  // 7. loop through the string
  // 8. check if the current character is the most frequent character
  // 9. if it is, update the most frequent character
  // 10. return the most frequent character
  let count = {};
  for (let char of string) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char]++;
  }

  let frequentChar = null;
  for (let char of string) {
    if (frequentChar == null || count[frequentChar] < count[char]) {
      frequentChar = char;
    }
  }
  return frequentChar;
};

// Test cases
console.log(mostFrequentChar("hello")); // l
console.log(mostFrequentChar("world")); // o
console.log(mostFrequentChar("aabbcc")); // a
console.log(mostFrequentChar("abc")); // a
console.log(mostFrequentChar("abcc")); // c
console.log(mostFrequentChar("aabbccdd")); // a
console.log(mostFrequentChar("")); // null
console.log(mostFrequentChar("a")); // a
console.log(mostFrequentChar("aa")); // a
console.log(mostFrequentChar("aaa")); // a
console.log(mostFrequentChar("abcdefghijklmnopqrstuvwxyz")); // 'z'
