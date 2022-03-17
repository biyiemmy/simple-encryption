'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/');

var decrypt = function decrypt(phrase) {

  var decryptedPhrase = '';

  phrase.toLowerCase().split('').forEach(function (letter) {
    var index = _utils.ALPHABET.indexOf(letter);

    if (index > -1) {
      decryptedPhrase += _utils.ROT13_ALPHABET[index];
    } else if (letter === ' ' || (0, _utils.isNumber)(letter) || (0, _utils.isSpecialChar)(letter)) {
      decryptedPhrase += letter;
    } else {
      throw 'Phrase is indecipherable as a ROT13.';
    }
  });

  return decryptedPhrase;
};

// because rot13's rotational value is 13 & the english alphabet contains 26 letters (26/2 = 13)
// => encrypt will equal decrypt
var encrypt = decrypt;

exports.default = { decrypt: decrypt, encrypt: encrypt };