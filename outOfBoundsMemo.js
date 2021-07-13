/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
 var findPaths = function(m, n, maxMove, startRow, startColumn) {
  dp = Array(maxMove + 1).fill(-1).map(y => Array(m + 1).fill(-1).map(x => Array(n + 1).fill(-1)));
  const M = 1000000007;

  const solve = (maxMove, startRow, startColumn) => {
      let solution = 0;

      if (startRow < 0 || startRow === m || startColumn < 0 || startColumn === n) {
          return 1;
      }
      if (maxMove === 0) {
          return 0;
      }
          // return 1
      // if no more moves
          // return 0
      // move ball up down left or right
      if (dp[maxMove][m][n] !== -1) {
          return dp[maxMove][m][n];
      }

      solution += solve(maxMove - 1, startRow + 1, startColumn)
      solution += solve(maxMove - 1, startRow - 1, startColumn)
      solution += solve(maxMove - 1, startRow, startColumn + 1)
      solution += solve(maxMove - 1, startRow, startColumn - 1);

      dp[maxMove][m][n] = solution;
      return solution;
  }

  return solve(maxMove, startRow, startColumn) % M;

};

console.log(findPaths(2, 3, 8, 1, 0));