//const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
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