// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {

  if (str.includes('!') || str.includes('?')) {
    let ponctuation = str.slice(-1);
    return str.split(' ')
      .filter((value) => !value.includes('!'))
      .filter((value) => !value.includes('?'))
      .map((word) => word.slice(1) + word.slice(0, 1) + "ay")
      .join(' ') + ' ' + ponctuation;
  } else {
    return str = str.split(' ')
      .map((word) => word.slice(1) + word.slice(0, 1) + "ay")
      .join(' ');
  }
}
