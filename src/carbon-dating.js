
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

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
};
