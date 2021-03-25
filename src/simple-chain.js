//const CustomError = require("../extensions/custom-error");
let ghi_met=false;
const chainMaker = {
  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(value==='GHI'&&!ghi_met){
      ghi_met=true;
      this.chain=[];
    }
    this.chain.push(`( ${value} )`);
    return this

  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(this.chain[position-1]===undefined){
      throw Error('ebanavrot')
    }
    this.chain.splice(position-1, 1);
    return this

  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this

  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let lastChain = this.chain.join('~~');
    this.chain=[];
    return lastChain;
  },
  chain: []
};

module.exports = chainMaker;
