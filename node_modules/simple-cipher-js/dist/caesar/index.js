'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/');

var _rot = require('../rot13/');

var _rot2 = _interopRequireDefault(_rot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encrypt = function encrypt(phrase, shift) {

  if (shift === 13) {
    return _rot2.default.encrypt(phrase);
  }

  var encryptedPhrase = '';

  phrase.toLowerCase().split('').forEach(function (letter) {
    var index = _utils.ALPHABET.indexOf(letter);

    if (letter === ' ' || (0, _utils.isNumber)(letter) || (0, _utils.isSpecialChar)(letter)) {
      encryptedPhrase += letter;
      return;
    }

    var shiftedIndex = index + shift;

    if (shiftedIndex > _utils.ALPHABET.length - 1) {
      shiftedIndex = shiftedIndex % _utils.ALPHABET.length;
    }

    if (shiftedIndex < 0) {
      shiftedIndex = _utils.ALPHABET.length - Math.abs(shift % _utils.ALPHABET.length);
    }

    encryptedPhrase += _utils.ALPHABET[shiftedIndex];
  });

  return encryptedPhrase;
};

var decrypt = function decrypt(phrase, shift) {

  if (shift === 13) {
    return _rot2.default.decrypt(phrase);
  }

  var decryptedPhrase = '';

  phrase.toLowerCase().split('').forEach(function (letter) {
    var index = _utils.ALPHABET.indexOf(letter);

    if (letter === ' ' || (0, _utils.isNumber)(letter) || (0, _utils.isSpecialChar)(letter)) {
      decryptedPhrase += letter;
      return;
    }

    var shiftedIndex = index - shift;

    if (shiftedIndex > _utils.ALPHABET.length - 1) {

      shiftedIndex = shiftedIndex % _utils.ALPHABET.length;
    }

    if (shiftedIndex < 0) {
      shiftedIndex = _utils.ALPHABET.length - Math.abs(shiftedIndex % _utils.ALPHABET.length);
    }

    decryptedPhrase += _utils.ALPHABET[shiftedIndex];
  });

  return decryptedPhrase;
};

exports.default = { encrypt: encrypt, decrypt: decrypt };