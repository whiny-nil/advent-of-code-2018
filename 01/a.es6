const inputHelper = require('../libs/inputHelper.es6');

function findSolution(input) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return input.reduce(reducer);
}

const officialInput = inputHelper.getLines(__dirname + '/input')
                                 .map( (el) => parseInt(el) );

console.log(findSolution([1, 1, 1]), 3);
console.log(findSolution([1, 1, -2]), 0);
console.log(findSolution(officialInput));
