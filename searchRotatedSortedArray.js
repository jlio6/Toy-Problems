/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {

  let low = 0;
  let high = nums.length - 1;
  let mid;
  let ans = -1;
  while (low <= high) {
      console.log(low, high);
      mid = low + Math.floor((high - low) / 2);
      if (nums[mid] === target) {
          ans = mid;
          break;
      }
      if (nums[mid] > target) {
          if (target >= nums[0] || nums[mid] < nums[0]) {
              // check left side
              high = mid - 1;
          } else {
              low = mid + 1;
          }
      } else {
          if (nums[mid] < nums[0] && target >= nums[0]) {
              high = mid - 1;
          } else {
              low = mid + 1;
          }
      }
  }

  return ans;

  // if last elem less than first elem, set rotate boolean to true
  // if (nums[0] > nums[nums.length - 1]) {
  //     let pivot = binarySearch(nums, target, 0, nums.length - 1, 1);
  //     console.log(pivot);
  //     if (target >= nums[0]) {
  //         return binarySearch(nums, target, 0, pivot, 0);
  //     } else {
  //         return binarySearch(nums, target, pivot + 1, nums.length - 1, 0);
  //     }
  // } else {
  //     return binarySearch(nums, target, 0, nums.length - 1, 0);
  // }
  // if not rotated, do regular binary search for value
  // otherwise,
      // iterate through array to find where i - 1 > i
      // pick midpoint i
      // if value at i - 1 > i, found pivot
          // if target is in between pivot and nums[0], search left half
          // else search right half
  // if
      // log n time complexity
  //
};

// const binarySearch = (nums, target, start, end, mode) => {
//     // if (mode === 1) {
//     //     console.log(start, end);
//     // }
//     if (end < start) {
//         return -1;
//     }
//     let midpoint = start + Math.floor((end - start) / 2);
//     if (mode === 0) {
//         equalCondition = nums[midpoint] === target;
//         greaterCondition = nums[midpoint] < target;
//     } else if (mode === 1) {
//         equalCondition = nums[midpoint + 1] < nums[midpoint];
//         greaterCondition = nums[midpoint] >= nums[0];
//     }
//     if (equalCondition) {
//         return midpoint;
//     }
//     if (greaterCondition) {
//         return binarySearch(nums, target, midpoint + 1, end, mode);
//     } else {
//         return binarySearch(nums, target, start, midpoint - 1, mode);
//     }
// }