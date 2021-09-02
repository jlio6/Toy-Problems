/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  const helper = (low, hi) => {
      let mid = low + Math.floor((hi - low) / 2);
      if (low > hi) {
          if (nums[mid] > target) {
              return mid;
          } else {
              return mid + 1;
          }
      }
      if (nums[mid] < target) {
          return helper(mid + 1, hi);
      } else if (nums[mid] > target) {
          return helper(low, mid - 1);
      } else {
          return mid;
      }
  }

  return helper(0, nums.length - 1);
};