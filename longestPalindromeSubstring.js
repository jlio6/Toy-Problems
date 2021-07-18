/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let left = 0;
  let right = 0;
  let max = 0;

  if (!s) {
      return '';
  }

  for (let i = 0; i < s.length; i++) {
      let len1 = helper(s, i, i);
      let len2 = helper(s, i, i + 1);
      let len = len1[1] - len1[0] > len2[1] - len2[0] ? len1 : len2;

      if (len[1] - len[0] + 1 > max) {
          max = len[1] - len[0] + 1;
          left = len[0];
          right = len[1] + 1;
      }
  }
  return s.slice(left, right);
};

// abacade

var helper = function(string, left, right) {
  let counter = 0;

  while (left >= 0 && right < string.length) {
      if (string[left] === string[right]) {
          left--;
          right++;
      } else {
          break;
      }

  }
  return [++left, --right];
}