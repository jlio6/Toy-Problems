/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  let result = [];
  const helper = (str, openCount, closeCount) => {
      if (closeCount > openCount || openCount > n) {
          return;
      } else if (closeCount === n) {
          result.push(str);
      } else {
          helper(str + '(', openCount + 1, closeCount);
          helper(str + ')', openCount, closeCount + 1);
      }
  }
  helper('', 0, 0);
  return result;
};

// "(", 1, 0 -> "((", 2, 0
//           -> "()", 1, 1 push
// ")", 0, 1