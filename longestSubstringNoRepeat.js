/**
 * @param {string} s
 * @return {number}

 I: string s
 O: number
 C: none
 E: empty string -> 0
 */
 var lengthOfLongestSubstring = function(s) {
  // abcadcbb
  // initialize hashmap
  let obj = {};
  let max = 0;
  let start = 0
  // initialize start at 0
  // loop through string char
  for (let i = 0; i < s.length; i++) {
      // if char in hashmap already
      if (obj[s[i]] >= 0) {
          start = Math.max(obj[s[i]] + 1, start);
      }
      obj[s[i]] = i;

      max = Math.max(max, i - start + 1);
          // remove chars from any point up to char
      // add index, char to hashmap
      // set max to maximum of current max and size of hashmap
  }

  return max;
};

console.log(lengthOfLongestSubstring('aabaab!bb'));