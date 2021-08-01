/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function(dividend, divisor) {
  let isNegative = false;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
      isNegative = true;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let final = 0;
  while (dividend >= divisor) { // 4, 3
      let counter = 1;
      let maxAmountToSubtract = divisor; // 3
      while (maxAmountToSubtract * 2 <= dividend) {
          maxAmountToSubtract *= 2;
          counter += counter; // 2
      }
      dividend -= maxAmountToSubtract; // 4 -> 1
      final += counter;
  }
  if (final > Math.pow(2, 31) - 1 && !isNegative) {
      return Math.pow(2, 31) - 1;
  }
  return final * (isNegative ? -1 : 1);
}