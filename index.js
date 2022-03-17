const { caesar, rot13 } = require('simple-cipher-js');
const cryptoJS = require("crypto-js");
const { stringify } = require('nodemon/lib/utils');
const cryptoJs = require("crypto-js");
const randomstring = require("randomstring");
const bip39 = require("bip39");

const wordEncryption = rot13.encrypt('hello');
console.log("encrypted word", wordEncryption);

const wordDecryption = rot13.decrypt(wordEncryption);
console.log("decrypted word", wordDecryption);

const caesarEncryption = caesar.encrypt("hello", 56);
console.log("encrypted word", caesarEncryption);

const caesarDecryption = caesar.decrypt(caesarEncryption, 56);
console.log("decrypted word", caesarDecryption);

//Advanced Encryption Standard AES Encryption
const aesEncryption = cryptoJS.AES.encrypt("hello", "secret key 123").toString();
console.log("encrypted word", aesEncryption);

//Advanced Encryption Standard AES Decryption
const aesDecryption = cryptoJS.AES.decrypt(aesEncryption, "secret key 123");
console.log("decrypted word", aesDecryption.toString(cryptoJS.enc.Utf8));

//Encrypting an object
const obj = [{id: 1, name: "Adebiyi"}, {id: 2, name: "Emmanuel"}];

const objEncryption = cryptoJs.AES.encrypt(JSON.stringify(obj), "secret key 123").toString();
console.log("encrpted object", objEncryption);

//Decrypting an object
const objDecryption = cryptoJs.AES.decrypt(objEncryption, "secret key 123");
console.log("decrypted object", objDecryption.toString(cryptoJs.enc.Utf8));

// generate a random number
const generateRandomNumber = () => {
    let randomNumber = randomstring.generate({ length: 6, charset: "numeric" });
    return randomNumber;
}

const encryptRandomNumber = () => {
    const randomNumber = generateRandomNumber();
    const encryptedRandomNumber = cryptoJs.AES.encrypt(randomNumber, "secret key 123").toString();
    return encryptedRandomNumber;
}

exports.encryptUsername = (username, secretKey) => {
    const encryptedUsername = cryptoJs.AES.encrypt(username, secretKey).toString();
    return encryptedUsername;
};

const encryptUsername = (username) => {
    const encryptedUsername = cryptoJs.AES.encrypt(username, "secret key 123").toString();
    return encryptedUsername;
}

// call function
console.log("randomNumber", generateRandomNumber());
console.log("encryptRandomNumber", encryptRandomNumber());
console.log("encryptedUsername", encryptUsername("biyiemmy"));

// sha256 encryption
const encryptRandomNumbers = () => {
    const randomNumber = generateRandomNumber();
    const encryptedRandomNumber = cryptoJs.SHA256(randomNumber).toString();
    return encryptedRandomNumber;
}

const encryptUsernames = (username) => {
    const encryptedUsername = cryptoJs.SHA256(username).toString();
    return encryptedUsername;
}

console.log("encryptedRandomNumber", encryptRandomNumbers());
console.log("encryptedUsername", encryptUsernames("Adebiyi Emmanuel is an upcoming developer"));

// generate mnemonic phrase
const generateMnemonicPhrase =() => {
    const mnemonicPhrase = bip39.generateMnemonic();
    return mnemonicPhrase;
}

// default mnemonic phrase to BIP39 English Word list
// uses hex encoding for entropy
// hex to  word list
const generateMnemonicPhraseHex =() => {
    const mnemonicPhraseHex = bip39.entropyToMnemonic("0000000");
}

// wordlist to hex
const convertMnemonicPhraseToHex = () =>  {
    const mnemonicPhrase = generateMnemonicPhrase();
    const mnemonicPhraseHex = bip39.mnemonicToEntropy(mnemonicPhrase);
    return mnemonicPhraseHex;
}


console.log("mnemonicPhrase", generateMnemonicPhrase());
console.log("mnemonicPhraseHex", convertMnemonicPhraseToHex());


module.exports = {encryptRandomNumber, generateRandomNumber, encryptUsername};

