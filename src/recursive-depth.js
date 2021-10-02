import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
    calculateDepth(arr) {
      let newArr = [];

      for (let item of arr) {
        if (Array.isArray(item)) {
          newArr.push(item);
        }
      }
      if (newArr.length === 0) {
        return 1;
      } else {
        let result = [];
        for (let item of newArr) {
          result.push(1 + this.calculateDepth(item));
        }
        return Math.max(...result);
      }
    }
}
