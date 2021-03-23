//const CustomError = require("../extensions/custom-error");

module.exports =
    function getSeason(date) {
  //if (typeof(date) === 'string') {
    //let date = Date.parse(date);
 // }
   if (date === undefined) { return 'Unable to determine the time of year!'}
   if (!(date instanceof Date)||Object.getOwnPropertyNames(date).includes('getMonth')) {
     throw Error('Error')
   } else {
     let month = date.getMonth();
     //if (month === undefined) {return "THROWN"}
     if (month >= 0 && month <= 1 || month === 11) { return 'winter'}
     if (month >= 2 && month <= 4) { return 'spring'}
     if (month >= 5 && month <= 7) { return 'summer'}
     if (month >= 8 && month <= 10) { return 'autumn'}
   }
}

//console.log(getSeason('hghg'))