/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) { // 123
  let result = 0;
//     let place = 0;
//     let copyX = Math.abs(x);
  let negative;

  if (x < 0) {
      negative = true;
  }
  x = Math.abs(x);


//     while (copyX > 0) {
//         place++; // 3
//         copyX = Math.floor(copyX / 10);
//     }

//     while (x > 0) {
//         result += x % 10 * Math.pow(10, place - 1); // 300
//         place--;
//         x = Math.floor(x / 10);
//     }

//     if (negative) {
//         result = -result;
//     }
//     if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
//         return 0;
//     }

  // -1

  while (x !== 0) {
      let digit = x % 10; // -2
      result = result * 10 + digit; // -2
      console.log(result);
      x = Math.floor(x / 10);
  }
  if (negative) {
      result = -result;
  }
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
      return 0;
  }

  return result;
};