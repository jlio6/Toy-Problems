/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  let hasWhitespace = false;
  let numDone = false;
  let isNegative = false;
  let counter = 0;
  let i = 0;
  // for (let i = 0; i < s.length; i++) {
      while (s[i] === ' ') {
          i++;
          hasWhitespace = true;
      }
      if (s[i] === '-') {
          isNegative = true;
          i++;
      } else if (s[i] === '+') {
          i++;
      }
      while (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
          counter++;
          numDone = true;
          i++;
      }
      if (!numDone) {
          return 0;
      }
      let res = 0;
      while (counter > 0) {
          res += s[i - counter] * Math.pow(10, counter - 1);
          counter--;
      }
      res *= isNegative ? -1 : 1;
      if (res < Math.pow(-2, 31)) {
          return Math.pow(-2, 31);
      } else if (res > Math.pow(2, 31) - 1) {
          return Math.pow(2, 31) - 1;
      }
      return res;
  // }
};