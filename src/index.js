module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join('').replace(/,/g, '');
  let arr = [];
  for (let elem of str) {
    let elemIndex = brackets.indexOf(elem);
    if (elemIndex % 2 === 0) {
      if (elem === brackets[elemIndex + 1] && arr[arr.length - 1] === elemIndex) {
        arr.pop();
      } else {
        arr.push(elemIndex);
      }
    } else {
      if (arr.pop() !== elemIndex - 1) {
        return false;
      }
    }
  }
  return arr.length === 0;
}