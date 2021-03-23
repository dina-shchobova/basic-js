//const CustomError = require("../extensions/custom-error");

module.exports =
    function transform(arr) {
    //throw new CustomError('Not implemented');
        let newArr = [];
        if (arr.length === 0) {
        return arr;
    } else if (!Array.isArray(arr)) {
        throw Error('Error')
    } else {
        let i = 0;
        while (i < arr.length) {
            if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
                newArr.push(arr[i]);
            }
            if (arr[i] === '--discard-next' && i !== arr.length - 1 ) {
                i++;
            }
            if (arr[i] === '--discard-prev' && i !== 0 && arr[i-2] !== '--discard-next') {
                newArr.pop();
            }
            if (arr[i] === '--double-next' && i !== arr.length - 1) {
                newArr.push(arr[i + 1]);
                newArr.push(arr[i + 1]);
                i++;
            }

            if (arr[i] === '--double-prev' && i !== 0 && arr[i-2] !== '--discard-next') {
                newArr.push(arr[i - 1]);
            }
            i++;
        }
    }
    return newArr;
}

