import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr
) {
  const arr2 = arr.map((i) => i);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== -1) {
      for (let j = i + 1; j < arr2.length; j++) {
        if ((arr2[j] !== -1) && (arr2[i] > arr2[j])) {
          const k = arr2[j];
          arr2[j] = arr2[i];
          arr2[i] = k;
        }
      }
    }
  }
  return arr2;
}
