/**
 * anagrams - to check if two strings are anagrams of each other.
 * @param {*} s1
 * @param {*} s2
 * @return {boolean} - true if the strings are anagrams, false otherwise
 *
 * @steps:
 * 1. create an object to store the frequency of characters in the first string.
 * 2. loop through the first string and store the frequency of characters in the object.
 * 3. loop through the second string and subtract the frequency of characters in the object.
 * 4. if the frequency of characters in the object is not zero, return false.
 * 5. return true
 */
const anagrams = (s1, s2) => {
  let count = {};
  for (let char of s1) {
    if (!count[char]) {
      count[char] = 0;
    }
    count[char]++;
  }
  for (let char of s2) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }

  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }
  return true;
};

// Test cases
console.log(anagrams("listen", "silent")); // true
console.log(anagrams("hello", "world")); // false
console.log(anagrams("abc", "cba")); // true
console.log(anagrams("abc", "bcd")); // false
console.log(anagrams("hello", "hello")); // true
console.log(anagrams("hello", "hell")); // false
