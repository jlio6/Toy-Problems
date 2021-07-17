/**
 * @param {number[]} nums
 * @return {number}
 */
 var triangleNumber = function(nums) {
  // what makes a triangle?
  // a + b > c, where a and b are <= c
  // so sort the list
  //
  // count = 2
  //  i  j     k
  // [2, 2, 3, 4]

  // start count from 0
  nums.sort((a, b) => a - b);
  let count = 0;
  // start for loop k backwards until index 2
  for (let k = nums.length - 1; k >= 2; k--) {
      let j = k - 1;
      let i = 0;
      while (j > i) {
          if (nums[i] + nums[j] > nums[k]) {
              count += j - i;
              j--;
          } else {
              i++;
          }
      }
  }

  return count;
};