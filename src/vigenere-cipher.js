//const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    module
    exports = VigenereCipheringMachine;

    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw Error("Нет параметра в encrypt")
        }
        let k = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = '';
        for (let char of message) {
            if (/[A-Z]/.test(char)) {
                result += this.encryptOneLetter(char, key[k]);
                k++;
                if (k > key.length - 1) {
                    k = 0;
                }
            } else {
                result += char;
            }
        }
        if (!this.direct) {
            return this.reverse(result);
        } else {
            return result;
        }
    }

    encryptOneLetter(x, y) {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let newPosition = alphabet.indexOf(x) + alphabet.indexOf(y);
        if (newPosition > 25) {
            newPosition = newPosition % 26;
        }
        return alphabet[newPosition];
    }

    decryptOneLetter(x, y) {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let decryptPosition = alphabet.indexOf(x) - alphabet.indexOf(y);
        if (decryptPosition < 0) {
            decryptPosition = 26 + decryptPosition;
        }
        return alphabet[decryptPosition];
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw Error("Нет параметра в decrypt")
        }
        let k = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = '';
        for (let char of message) {
            if (/[A-Z]/.test(char)) {
                result += this.decryptOneLetter(char, key[k]);
                k++;
                if (k > key.length - 1) {
                    k = 0;
                }
            } else {
                result += char;
            }
        }
        if (!this.direct) {
            return this.reverse(result);
        } else {
            return result;
        }
    }

    reverse(str) {
        return str.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;