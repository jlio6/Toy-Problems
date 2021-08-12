/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
      // [2, 2, 2, 4]

      // initialize min at INFINITY  // 1
      let min = Infinity;
      let dp = new Array(nums.length).fill(-1);

      // helper takes start position, counter
      const helper = (position) => {
          if (position >= nums.length - 1) {
              return 0;
          }
          if (dp[position] !== -1) {
              return dp[position];
          }

          for (let i = 1; i <= nums[position]; i++) {
              min = Math.min(min, 1 + helper(position + i));
          }
          dp[position] = min;
          return min;
      }
          // if start position is equal to length - 1
              // if counter is less than min, set min equal to counter
              // return
          // for loop from 0 to num at start position
              // counter++
              // rerun function with (start + i + 1)
              // counter--

      // run helper function (0 start position, 0)
      return helper(0);

    //   let jumps = 0;
    //   let curEnd = 0;
    //   let curFarthest = 0;

    // for (let i = 0; i < nums.length - 1; i++) {
    //   curFarthest = Math.max(curFarthest, i + nums[i]);
    //   if (i === curEnd) {
    //     jumps++;
    //     curEnd = curFarthest;
    //   }
    // }
    // return jumps;
  };