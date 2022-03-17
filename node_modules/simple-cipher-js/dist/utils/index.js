'use strict';

var ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var ROT13_ALPHABET = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

var isNumber = function isNumber(text) {
  return Boolean(Number(text));
};

var isSpecialChar = function isSpecialChar(text) {
  var regex = /[^\w\s]/;
  return text.match(regex);
};

module.exports = {
  ALPHABET: ALPHABET,
  ROT13_ALPHABET: ROT13_ALPHABET,
  isNumber: isNumber,
  isSpecialChar: isSpecialChar
};