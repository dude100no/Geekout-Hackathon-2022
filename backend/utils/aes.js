const aes256 = require("aes256");

const encrypt = (text, key) => {
  const encrypted = aes256.encrypt(key, text);
  return encrypted;
};

const decrypt = (cipher, key) => {  
  const decrypted = aes256.decrypt(key, cipher);
  return decrypted;
};

module.exports = {
  encrypt,
  decrypt
};