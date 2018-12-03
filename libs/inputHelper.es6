const fs = require('fs');

exports.getLines = (fileName) => {
  const rawInput = fs.readFileSync(fileName, 'utf8');

  return rawInput.trim().split("\n");
};
