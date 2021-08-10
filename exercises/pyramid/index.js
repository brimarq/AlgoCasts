// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const length = n + (n - 1);
  let spaces = length - 1;
  let chars = 1;

  while (n > 0) {
    console.log(
      ' '
        .repeat(spaces / 2)
        .concat('#'.repeat(chars))
        .concat(' '.repeat(spaces / 2))
    );
    chars += 2;
    spaces -= 2;
    n--;
  }
}

module.exports = pyramid;
