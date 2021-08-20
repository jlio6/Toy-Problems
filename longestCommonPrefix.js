/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let result = '';
  for (let i = 0; i < strs[0].length; i++) {
      let letter = strs[0][i]; // f
      for (let j = 0; j < strs.length; j++) {
          if (strs[j][i] !== letter) {
              return result;
          }
      }
      result += letter;
  }
  return result;
};