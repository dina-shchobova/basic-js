//const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let obj = {};
  obj.turns = 2 ** disksNumber - 1;
  let speedSec =  turnsSpeed/3600;

  obj.seconds = Math.floor(obj.turns / speedSec);
  return obj;
};


