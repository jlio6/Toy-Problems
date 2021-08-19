/**
 * @param {number} x
 * @return {boolean}
 */

// 1001

var isPalindrome = function(x) {
  if (x < 0) {
      return false;
  }
  if (x % 10 === 0 && x !== 0) {
      return false;
  }
  let reversed = 0;
  let copyX = x;
  while (copyX) {
      reversed = reversed * 10 + copyX % 10;
      copyX = Math.floor(copyX / 10);
  }
  return reversed === x;
//     let temp = x; // 0
//     let numDigits = 0; // 3
//     let ones = 1;
//     while (temp) {
//         numDigits++;
//         temp = Math.floor(temp / 10);
//     }

//     while (true) {
//         let first = Math.floor(x / Math.pow(10, numDigits - 1)) % 10; // 1
//         let last = x % 10; // 1

//         if (first === last) {
//             numDigits = numDigits - 2;
//             if (numDigits <= ones) {
//                 return true;
//             }
//             x = Math.floor(x / 10); // 100
//         } else {
//             return false;
//         }
//     }
  // let temp = x.toString().split('');
  // if (temp.length <= 1) {
  //     return true;
  // }
  // let firstNum = temp[0];
  // let lastNum = temp[temp.length - 1];
  // if (firstNum === lastNum) {
  //     let remainder = Number(temp.slice(1, -1).join(''));
  //     return isPalindrome(remainder);
  // }
  return false;
};