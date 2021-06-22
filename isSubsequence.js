// const isSubsequence = (str1, str2) => {
//   let counter = 0;

//   for (let i = 0; i < str2.length; i++) {
//     if (str2[i] === str1[counter]) {
//       counter++;
//     }
//     if (counter === str1.length) {
//       return true;
//     }
//   }
//   return false;
// }

const isSubsequence = (str1, str2) => {
  if (str1.length === 0) {
    return true;
  }
  if (str2.length === 0) {
    return false;
  }
  if (str1[0] === str2[0]) {
    return isSubsequence(str1.slice(1), str2.slice(1));
  }
  return isSubsequence(str1, str2.slice(1));

}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'acbd')); // false
