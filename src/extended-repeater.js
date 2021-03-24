//const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    const repeatTimes = (options.repeatTimes === undefined) ? 1 :  options.repeatTimes;
    const separator = (options.separator === undefined) ? '+' :  options.separator;
    const addition = (options.addition === undefined) ? '' :  options.addition;
    const additionRepeatTimes = (options.additionRepeatTimes === undefined) ? 1 :  options.additionRepeatTimes;
    const additionSeparator = (options.additionSeparator === undefined) ? '|' :  options.additionSeparator;

    function doAdd(add, times, sep) {
        let array = [];
        for (let i = 1; i <= times; i++) {
            array.push(add+'');
        }
        let newStr = array.join(sep);
        return newStr;
    }

    let allAddition = doAdd(addition, additionRepeatTimes, additionSeparator);

    return doAdd(str+allAddition, repeatTimes, separator);

}

