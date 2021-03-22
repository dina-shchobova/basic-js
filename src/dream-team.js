//const CustomError = require("../extensions/custom-error");

module.exports =
function createDreamTeam(members) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (Array.isArray(members)) {
        if (members.length === 0) {
            return null;
        } else {
            let firstLetters = [];
            for (let item of members) {
                if (typeof (item) === 'string') {
                    item = item.trim().toUpperCase();
                    firstLetters.push(item[0]);
                }
            }
            return (firstLetters !== []) ? firstLetters.sort().join('') : false;
        }
    } else {return false}
}


