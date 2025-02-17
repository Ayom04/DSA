/**
 * mostFrequentChar - This function should return the most frequent character in a string.
 * @param {*} string  - The string to check for the most frequent character
 * @returns {string} - The most frequent character in the string
 * Complexity:
 * TIme: 0(n)
 * Space: 0(n)
 */
const mostFrequentChar = (string) => {
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
