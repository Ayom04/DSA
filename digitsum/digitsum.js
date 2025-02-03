const digitSum = (n) => {
  let total = n.split("").reduce((acc, val) => acc + Number(val), 0);
  return total;
};

console.log(digitSum("1234")); // 10
console.log(digitSum("123456")); // 21
console.log(digitSum("123456789")); // 45
console.log(digitSum("0")); // 0
console.log(digitSum("1")); // 1
console.log(digitSum("12")); // 3
