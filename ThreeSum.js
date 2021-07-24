/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  //   i   j            k
  // [-4, -1, -1, 0, 1, 2]
  let result = [];
  nums = nums.sort((a, b) => a - b);

      for (let i = 0; i < nums.length - 2; i++) {
          let j = i + 1;
          let k = nums.length - 1;

          while (j < k) {
              if (nums[i] + nums[j] + nums[k] === 0) {
                  result.push([nums[i], nums[j], nums[k]]);
                  while (nums[j + 1] === nums[j]) {
                      j++;
                  }
                  j++;
                  k--;
              } else if (nums[i] + nums[j] + nums[k] < 0) {
                  j++;
              } else {
                  k--;
              }
          }
          while (nums[i] === nums[i + 1]) {
              i++;
          }

  }
  return result;

};