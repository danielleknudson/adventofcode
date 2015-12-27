var md5   = require('md5');

module.exports = day_four = {};

day_four.string = 'iwrupvqb';

day_four.hasFiveZeros = function (str) {
  return str[0] === "0" &&
         str[1] === "0" &&
         str[2] === "0" &&
         str[3] === "0" &&
         str[4] === "0";
};

day_four.hasSixZeros = function (str) {
  return str[0] === "0" &&
         str[1] === "0" &&
         str[2] === "0" &&
         str[3] === "0" &&
         str[4] === "0" &&
         str[5] === "0";
};

day_four.findLowestNumber = function () {
  var count = 0, hash = md5(day_four.string + count);

  while (!day_four.hasFiveZeros(hash)) {
    count++; 
    hash = md5(day_four.string + count);
  }

  return count;
};


// painfully slow, 68.6s to execute... need a more performant way to find this solution
day_four.findNumberThatCreatesSixZeroHash = function (start) {
  var count = start, hash = md5(day_four.string + count);

  while (!day_four.hasSixZeros(hash)) {
    count++; 
    hash = md5(day_four.string + count);
  }

  return count;
};