import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  function helper (x, y) {
    let counter = 0;
    for (let i = 0; i < x.length; i++) {
      for (let j = y.length; j >= 0; j--) {
        if (x[i] === y[j]) {
          counter++;
          y.splice(j, 1);
          break;
        }
      }
    }

    return counter;
  }

  return arr1.length <= arr2.length ? helper(arr1, arr2) : helper(arr2, arr1);
}
