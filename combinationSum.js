/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 2 3 6 7, 7

var combinationSum = function(candidates, target) {
  // initialize result array
  let result = [];

  const findCombos = (target, combo, start) => {
      if (target < 0) {
          return;
      }
      if (target === 0) {
          return result.push(combo.slice());
      } else {
          for (let i = start; i < candidates.length; i++) {
              combo.push(candidates[i]);
              findCombos(target - candidates[i], combo, i);
              combo.pop();
          }
      }
  }

  findCombos(target, [], 0);
  return result;

  // define helper function
  // if target less than 0, return
  // for loop through candidates i
      // initialize combo array
      // target minus i
      // combo.push(i)
      // if target is 0
          // result.push(combo.slice) must create a copy of combo otherwise a reference is passed in which, when combo gets mutated, so does result
      // otherwise run function with candidates, target - i

};