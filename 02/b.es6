const inputHelper = require("../libs/inputHelper.es6");

const compare = (str1, str2) => {
  for (let i = 1; i < str1.length; i++) {
    const front1 = str1.slice(0, i+1);
    const back1 = str1.slice(i+2);
    const front2 = str2.slice(0, i+1);
    const back2 = str2.slice(i+2);

    if (front1 == front2 && back1 == back2) {
      return front1 + back1;
    } else if (front1 != front2 && back1 != back2) {
      return '';
    }
  }

  return '';
};

const findCommon = (input) => {
  let common = '';

  topLoop:
    for (let i = 0; i < input.length - 1; i++) {
      const pop = input.pop();

      for (let j = 0; j < input.length -1; j++) {
        common = compare(pop, input[j]);
        if (common != '') break topLoop;
      }
    }

  return common;
}

const testInput = [
  "abcde",
  "fghij",
  "klmno",
  "pqrst",
  "fguij",
  "axcye",
  "wvxyz"
];
const input = inputHelper.getLines(__dirname + '/input');

console.log(findCommon(testInput), "fgij");
console.log(findCommon(input));
