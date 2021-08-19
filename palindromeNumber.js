/**
 * @param {number} x
 * @return {boolean}
 */

// 121

var isPalindrome = function(x) {
  if (x < 0) {
      return false;
  }
  let temp = x.toString().split('');
  if (temp.length <= 1) {
      return true;
  }
  let firstNum = temp[0];
  let lastNum = temp[temp.length - 1];
  if (firstNum === lastNum) {
      let remainder = Number(temp.slice(1, -1).join(''));
      return isPalindrome(remainder);
  }
  return false;
};