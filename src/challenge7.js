let characters = ['character', ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '£', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '\'', '"', '\\', '|', ',', '.', '<', '>', '/', '?', '`', '~', '§', '±', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

class LetterNumber {
  constructor() {
    this.cipherText = '';
    this.currentIndex = 0;
  }

  encrypt(plainText, offset) {
    this.cipherText = '';
    for (let letter in plainText) {
      this.currentIndex = characters.findIndex(char => char === plainText[letter]) + offset;
      if (this.currentIndex > 99) {
        this.currentIndex = this.currentIndex % 100;
      }
      this.currentIndex < 10 ? this.cipherText += '0' + this.currentIndex : this.cipherText += this.currentIndex;
    }
    return this.cipherText;
  }
}

const letterNumber = new LetterNumber();
console.log(letterNumber.encrypt(`a`, 1)); // "03"
console.log(letterNumber.encrypt(`Ed`, 4)); //"3609"""
console.log(letterNumber.encrypt(`Hi, Ed!`, 302)); // "37128003340756"
console.log(letterNumber.encrypt(`hello, world`, 5));