/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

  // initiate obj
  let obj = {};
  // for loop thru nums
  for (let i = 0; i < nums.length; i++) {
      if (obj[nums[i]] >= 0) {
          return [obj[nums[i]], i];
      } else {
          obj[target - nums[i]] = i;
      }
  }

};