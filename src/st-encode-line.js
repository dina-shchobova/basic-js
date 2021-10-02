import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const arr = str.split('');
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let counter = 1;
    while (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      counter++;
    }
    if (counter > 1) {
      result.push(`${counter}${arr[i]}`);
    } else {
      result.push(`${arr[i]}`);
    }
  }
  return result.join('');
}
