/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums, start = 0, end = nums.length - 1) {
  // nums = [1,2,1,3,5,6,4]
  // I: array of numbers
  // O: index of peak
  // C: no repeats, negatives included, no empty arrays
  // E: n/a
  if (end === start) {
      return start;
  }

  let mid = Math.floor(start + (end - start) / 2);
  if (nums[mid] > nums[mid + 1]) {
      return findPeakElement(nums, start, mid);
  } else {
      return findPeakElement(nums, mid + 1, end);
  }


};
