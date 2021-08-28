/**
 * @param {number[][]} grid
 * @return {number}
 */
 var numMagicSquaresInside = function(grid) {
  let total = 0;
  let height = grid.length;
  let width = grid[0].length;
  let set = new Set();

  if (height < 3 || width < 3) {
      return 0;
  }

  for (let i = 0; i < height - 2; i++) {
      for (let j = 0; j < width - 2; j++) {
          let magicSquare = [];
          let sum = 0;
          for (let k = 0; k < 3; k++) {
              magicSquare.push(grid[i + k].slice(j, j + 3));
              sum += grid[i + k][j];
          }
          if (!checkMagicSquare(magicSquare, sum)) {
              continue;
          }
          total++;
      }
  }
  return total;
};

const checkMagicSquare = (array, sum) => {
  if (checkRows(array, sum) && checkCols(array, sum) && checkDiagonals(array, sum) && unique(array)) {
      return true;
  }
  return false;
}

const checkRows = (array, sum) => {
  let rowSum = 0;
  for (let i = 0; i < 3; i++) {
      rowSum += array[i][0] + array[i][1] + array[i][2];
      if (rowSum !== sum) {
          return false;
      }
      rowSum = 0;
  }
  return true;
}
const checkDiagonals = (array, sum) => {
  let diaSum = 0;
  diaSum += array[0][0] + array[1][1] + array[2][2];
      if (diaSum !== sum) {
          return false;
      }
      diaSum = 0;
diaSum += array[2][0] + array[1][1] + array[0][2];
  if (diaSum !== sum) {
      return false;
  }
  diaSum = 0;
  return true;
}
const checkCols = (array, sum) => {
  let colSum = 0;
  for (let i = 0; i < 3; i++) {
      colSum += array[0][i] + array[1][i] + array[2][i];
      if (colSum !== sum) {
          return false;
      }
      colSum = 0;
  }
  return true;
}

const unique = (array) => {
  let set = new Set();
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          set.add(array[i][j]);
      }
  }
  for (let k = 1; k <= 9; k++) {
      if (!set.has(k)) {
          return false;
      }
  }
  return true;
}
console.log(numMagicSquaresInside([[4,7,8],[9,5,1],[2,3,6]]));