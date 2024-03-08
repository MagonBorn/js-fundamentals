class LetterNumber {
  constructor() {
    this._charSet = `- abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:'"\\|,.<>/?\`~§±1234567890`;
    this._charSet = this._charSet.split('');
  }

  encrypt(plaintext, offset) {
    let encryptedString = '';
    for (let i = 0; i < plaintext.length; i++) {
      let j = this._charSet.findIndex(letter => letter === plaintext[i]);
      j += offset;
      let diff = 97 + offset
      if (j > 97) {
        j -= diff - 99;
      }
      if (j < 10) {
        j = '0' + j;
      }
      encryptedString += j;
    }
    return encryptedString;
  }

}

const letterNumber = new LetterNumber();
console.log(letterNumber.encrypt(`a`, 1));
console.log(letterNumber.encrypt(`Ed`, 4));
console.log(letterNumber.encrypt(`Hi, Ed!`, 302));
console.log(letterNumber.encrypt(`hello, world`, 5));