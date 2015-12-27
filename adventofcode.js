var md5   = require('md5');
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
**/
