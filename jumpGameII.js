/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  //     // [2, 2, 2, 4]

  //     // initialize min at INFINITY  // 1
  //     let min = Infinity;

  //     // helper takes start position, counter
  //     const helper = (position, counter) => {
  //         if (position === nums.length - 1) {
  //             min = Math.min(min, counter);
  //             return;
  //         }
  //         for (let i = 0; i < nums[position]; i++) {
  //             counter++;
  //             helper(position + i + 1, counter);
  //             counter--;
  //         }
  //     }
  //         // if start position is equal to length - 1
  //             // if counter is less than min, set min equal to counter
  //             // return
  //         // for loop from 0 to num at start position
  //             // counter++
  //             // rerun function with (start + i + 1)
  //             // counter--

  //     // run helper function (0 start position, 0)
  //     helper(0, 0);
  //     return min;

      let jumps = 0;
      let curEnd = 0;
      let curFarthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
      curFarthest = Math.max(curFarthest, i + nums[i]);
      if (i === curEnd) {
        jumps++;
        curEnd = curFarthest;
      }
    }
    return jumps;
  };