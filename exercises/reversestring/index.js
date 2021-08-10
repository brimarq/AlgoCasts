// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('');
}

function reverse2(str) {
  let rev = '';
  for (char of str) {
    rev = char + rev;
  }
  return rev;
}

function reverse3(str) {
  return str.split('').reduce((rev, char) => character + reversed, '');
}

// avoid using the older-style for loop
function reverse4(str) {
  let rev = [];
  for (let i = str.length - 1; i >= 0; i--) {
    rev.push(str[i]);
  }
  return rev.join('');
}

module.exports = reverse;
