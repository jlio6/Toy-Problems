// Find the largest continguous subarray contained within a given window size
const minSubarrayLen = (array, target) => {
  let minLen = Infinity;
  let pos1 = 0;
  let pos2 = pos1;
  let subtotal = array[pos1];
  while (pos1 < array.length) {
    if (subtotal >= target) {
      minLen = Math.min(minLen, pos2 - pos1 + 1);
      subtotal -= array[pos1];
      pos1++;
    }
    else if (subtotal < target && pos2 < array.length - 1) {
      pos2++;
      subtotal += array[pos2];
    } else {
      break;
    }
  }
  if (minLen === Infinity) {
    return 0;
  }
  return minLen;
}
// subtotal = 8
// minLen = 3
console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 100)); // 0
console.log(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
