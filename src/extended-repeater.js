import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
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
