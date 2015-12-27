var one   = require('./1/one.js');
var two   = require('./2/two.js');
var three = require('./3/three.js');
var four  = require('./4/four.js');

/**
* Day 2
**/
var ribbonNeeded = two.findRibbonNeeded(two.string);
var wrappingPaperNeeded = two.findWrappingPaperNeeded(two.string);

console.log('DAY 2');
console.log('Wrapping paper needed: ' + wrappingPaperNeeded);
console.log('Ribbon needed: ' + ribbonNeeded);

/**
* Day 3
**/
var numHouses = three.deliverPresents(three.string);
var numHouses2 = three.deliverPresents(three.string, true); // add two houses for santa and robo-santa's starting locations
console.log('DAY 3');
console.log('Number of houses Santa delivers presents to: ' + numHouses);
console.log('Number of houses Santa and Robo Santa deliver presents to: ' + numHouses2);

/**
* Day 4
*
* Note: to find num2 is painfully slow, may need to run in four.js
**/
var num = four.findLowestNumber();
var num2 = four.findNumberThatCreatesSixZeroHash(num);
console.log('DAY 4');
console.log('The lowest number to create a hash with 5 leading zeros is: ' + num);
console.log('The lowest number to create a hash with 6 leading zeros is: ' + num2);