const fs = require('fs');

exports.getLines = () => {
  const rawInput = fs.readFileSync('inputs', 'utf8');

  return rawInput.trim().split("\n");
};
