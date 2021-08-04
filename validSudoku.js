/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  let rowSet = [];
  let colSet = [];
  let gridSet = [];

  for (let z = 0; z < board.length; z++) {
      rowSet.push(new Set());
      colSet.push(new Set());
      gridSet.push(new Set());
  }

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
          if (board[i][j] === '.') {
              continue;
          }

          if (rowSet[i].has(board[i][j])) {
              return false;
          }
          rowSet[i].add(board[i][j]);

          if (colSet[j].has(board[i][j])) {
              return false;
          }
          colSet[j].add(board[i][j]);

          let grid = 3 * (Math.floor(i / 3)) + (Math.floor(j / 3));

          if (gridSet[grid].has(board[i][j])) {
              return false;
          }
          gridSet[grid].add(board[i][j]);
          }
      }
  return true;
}
