/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
  // abba
  // [dog, cat, cat, dog]

  let dictionary = {};
  s = s.split(' ');
  if (s.length !== pattern.length) {
      return false;
  }
  if(new Set(s).size !== new Set(pattern).size) return false;

  for (let i = 0; i < pattern.length; i++) {
      if (!dictionary[pattern[i]]) {
          dictionary[pattern[i]] = s[i];
      } else {
          if (dictionary[pattern[i]] !== s[i]) {
              return false;
          }
      }
  }
  return true;
};