/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  let res = '';
  if (numRows === 1) {
      return s;
  }
  for (let i = 0; i < numRows; i++) {
      let n = 0;
      while (i + (numRows - 1) * 2 * n < s.length) {
          res += s[i + (numRows - 1) * 2 * n];
          if (i > 0 && i < numRows - 1 && i + (numRows - 1 - i) * 2 + (numRows - 1) * 2 * n < s.length) {
              res += s[i + (numRows - 1 - i) * 2 + (numRows - 1) * 2 * n];
          }
          n++;
      }


  }
  return res;
};

