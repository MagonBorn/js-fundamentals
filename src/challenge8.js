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

  decrypt(cipherText, offset) {
    let decryptedString = '';
    let decryptionArray = [];
    for (let i = 0; i < cipherText.length; i += 2) {
      decryptionArray.push(Number(cipherText.substring(i, i + 2)));
    }
    const mappedArray = decryptionArray.map((number) => number - offset);
    for (let number in mappedArray) {
      if (mappedArray[number] < 0) {
        mappedArray[number] += offset - 2;

      }
      decryptedString += this._charSet[mappedArray[number]];
    }
    return decryptedString;
  }
}

const letterNumber = new LetterNumber();
console.log(letterNumber.decrypt("0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025", 4771)) // a human-readable sentence
// letterNumber.decrypt("21774590777279878686737286777776729287727587857772938872958192807273728677957287867750", 4771) // a human-readable sentence
// letterNumber.decrypt("0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225", 4771) // a human-readable sentence

// another way to test your program
let plaintext = "hello, world"
let key = 5
console.log(plaintext === letterNumber.decrypt(letterNumber.encrypt(plaintext, key), key))

console.log(letterNumber.encrypt(`hello world`, 4471));
console.log(letterNumber.decrypt(`1108151518032618211507`, 4471));