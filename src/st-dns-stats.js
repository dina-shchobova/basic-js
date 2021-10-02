import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains ) {
  const appearances = {};
  const arr = [];

  for (let item of domains) {
    arr.push(`${item}.`);
    while (item.indexOf('.') !== (-1)) {
      const index = item.indexOf('.') + 1;
      item = item.slice(index);
      arr.push(`${item}.`);
    }
  }
  arr.sort();
  const reverseArr = [];

  for (const item of arr) {
    const reverse = item.split('.').reverse().join('.');
    reverseArr.push(reverse);
  }

  for (let i = 0; i < reverseArr.length; i++) {
    if (appearances[reverseArr[i]] === undefined) {
      appearances[reverseArr[i]] = 1;
    } else {
      appearances[reverseArr[i]]++;
    }
  }
  return appearances;
}
