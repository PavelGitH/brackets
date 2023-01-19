module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join('').replace(/,/g, '');
  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < brackets.length; k++) {
      if (str[i] === brackets[k]) {
        if (str[i + 1] === brackets[k + 1]) {
          str = str.slice(0, i) + str.slice(i + 2);
          i = 0;
          k = -1;
        }
      }
    }
  }
  return str.length === 0;
}