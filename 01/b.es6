const inputHelper = require('../libs/inputHelper.es6');

const findSolution = (input) => {
  let currentFrequency = 0
  const foundFrequencies = new Set([0]);
  loop1:
    while (true) {
      for(let i = 0; i < input.length; i++) {
        const change = input[i];
        currentFrequency = currentFrequency + change;
        if (foundFrequencies.has(currentFrequency)) {
          break loop1;
        } else {
          foundFrequencies.add(currentFrequency);
        }
      };
    }

  return currentFrequency;
};

const officialInput = inputHelper.getLines(__dirname + '/input')
                                 .map( (el) => parseInt(el) );

console.log(findSolution([3, 3, 4,-2, -4]), 10)
console.log(findSolution([-6, 3, 8, 5, -6]), 5)
console.log(findSolution(officialInput));
