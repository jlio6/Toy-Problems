/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// [5 7 7 7 7 8 8 10]

var searchRange = function(nums, target) {
  // initialize result to [-1, -1]
  let result = [-1, -1];
  let low = 0;
  let hi = nums.length - 1;
  let mid;

  while (low <= hi) {
      mid = low + Math.floor((hi - low) / 2);
      if (nums[mid] < target) {
          low = mid + 1;
      } else if (nums[mid] > target || (nums[mid - 1] === target && nums[mid] === target)) {
          hi = mid - 1;
      } else {
          result[0] = mid;
          low = mid;
          hi = nums.length - 1;
          while (low <= hi) {
              mid = low + Math.floor((hi - low) / 2);
              if (nums[mid + 1] === target) {
                  low = mid + 1;
              } else if (nums[mid] > target) {
                  hi = mid - 1;
              } else {
                  result[1] = mid;
                  break;
              }
          }
          break;
      }
  }
  return result;
};

// look for target value on right, not target value on left with binary search

      // assign result first value to mid
      // once found, set left bound to mid, right bound to array length - 1
  // look for target value on left, not target value on right with binary search
      // assign result second value to mid