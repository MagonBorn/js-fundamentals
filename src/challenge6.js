let characters = ['character', ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '£', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '\'', '"', '\\', '|', ',', '.', '<', '>', '/', '?', '`', '~', '§', '±', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

let encrypt = string => {
  let encryptedString = '';
  for (let letter in string) {
    encryptedString += characters.findIndex(char => string[letter] === char);
  }
  return encryptedString;
}

console.log(encrypt(`E`));
console.log(encrypt(`d`));
console.log(encrypt(`Ed`));
console.log(encrypt("Hi, Ed!"));