const {encryptRandomNumber, generateRandomNumber, encryptUsername} = require("./index");

generateRandomNumber();
console.log(encryptUsername("jordan", "secret key 123"));