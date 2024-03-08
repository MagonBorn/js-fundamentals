let charSet = `- abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:'"\\|,.<>/?\`~§±1234567890`
charSet = charSet.split('');


const encrypt = function (string) {
  let encryptedString = '';
  for (let i = 0; i < string.length; i++) {
    encryptedString += charSet.findIndex(char => char === string[i]);
  }
  return encryptedString;
}

console.log(encrypt(`E`));
console.log(encrypt(`d`));
console.log(encrypt(`Ed`));
console.log(encrypt("Hi, Ed!"));