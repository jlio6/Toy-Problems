const findLongestSubstring = (string) => {
  if (string.length === '') {
    return 0;
  }
  let obj = {};
  let longestSub = 0;
  let max = 0;
  for (let i = 0; i < string.length; i++) {
    console.log('current letter is ' ,obj[string[i]]);
    if (obj[string[i]]) {
      let deleteUpTo = obj[string[i]];
      for (let j = 0; j <= deleteUpTo; j++) {
        delete obj[string[j]];
      }
      i--;
    } else {
      obj[string[i]] = i;
      max = Object.keys(obj).length;
      longestSub = Math.max(max, longestSub);
    }
    console.log('obj is now ', obj);
    console.log('the max is ', max);
  }
  return longestSub;
}
// console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('thisisawesome'));
// console.log(findLongestSubstring('bbbbb'));
// console.log(findLongestSubstring('longestsubstring'));