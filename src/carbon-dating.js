import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  let x = typeof(sampleActivity);
  let y = typeof(Number(sampleActivity));
  let regexp = /^\d+/;
  let z = regexp.test(sampleActivity);

  if ( x !== 'string' || z !== true || y !== 'number' || Number(sampleActivity) <= 0 ) {
    return false
  } else {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let age = (1 / k) * Math.log(MODERN_ACTIVITY / +sampleActivity );
    if (Math.ceil(age) < 0) {
      return false
    } else {
      return Math.ceil(age);
    }
  }
}
