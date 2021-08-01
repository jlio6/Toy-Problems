/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
  // find last occuring maxima
  // swap value at maxima - 1  with the next greatest value to the right
  // reverse values from maxima to the end
  //       i
  //          j
  // 1  2  3
  let i = nums.length - 1;

  while (nums[i - 1] >= nums[i] && i >= 1) {
      i--;
  }
  if (i > 0) {
      let j = i;
      while (nums[j] > nums[i - 1] && j <= nums.length - 1) {
          j++;
      }
      swap(nums, i - 1, j - 1);
  }
  reverse(nums, i, nums.length - 1);
  return nums;

};

const swap = (nums, x, y) => {
  let temp = nums[x];
  nums[x] = nums[y];
  nums[y] = temp;
}

const reverse = (nums, x, y) => {
  while (x < y) {
      swap(nums, x, y);
      x++;
      y--;
  }
}