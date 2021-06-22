const isSubsequence = (str1, str2) => {
  let counter = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[counter]) {
      counter++;
    }
    if (counter === str1.length) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'acbd')); // false