const inputHelper = require("../libs/inputHelper.es6");

const findChecksum = (input) => {
  let hasTwo = 0;
  let hasThree = 0;

  input.forEach((row) => {
    let twos = 0;
    let threes = 0;
    let counts = {};
    let chars = row.split('');

    chars.forEach((char) => {
      if (counts[char] == undefined ) {
        counts[char] = 1;
      } else {
        counts[char] = counts[char] + 1;
        if (counts[char] == 2) twos++;
        if (counts[char] == 3) {
          twos--;
          threes++;
        }
      };
    });

    if (twos > 0) hasTwo++;
    if (threes > 0) hasThree++;
  });

  return hasTwo * hasThree;
}

const testInput = [
  "abcdef",
  "bababc",
  "abbcde",
  "abcccd",
  "aabcdd",
  "abcdee",
  "ababab",
];
const input = inputHelper.getLines();

console.log(findChecksum(testInput), 12);
console.log(findChecksum(input));
