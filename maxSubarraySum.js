// Find the largest continguous subarray contained within a given window size
const maxSubarraySum = (array, size) => {
  if (!array.length) {
    return undefined;
  }
  let total = 0;
  for (let i = 0; i < size; i++) {
    total += array[i];
  }
  let max = total;
  for (let j = 0; j < array.length - size; j++) {
    total = total - array[j] + array[j + size];
    max = Math.max(total, max);
  }
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));