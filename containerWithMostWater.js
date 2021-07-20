/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  // one pointer at each end
  // initialize max = 0
  // set area as min of two values times j - i
  // if height at i + 1 greater than height at i, take max of the two areas

  // while left is less than right
    // set area as maximum of previous max or right - left * min of h[r], h[l]
      // if height at left is less than height at right
          // move left up
      // else
          // move right down

  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
      max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
      if (height[left] <= height[right]) {
          left++;
      } else {
          right--;
      }
  }

  return max;
};