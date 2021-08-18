function rotateOverDiagonals(m, k) {
  let mCopy = JSON.parse(JSON.stringify(m));

  for (let i = 0; i < k; i++) {
      for (let k = 0; k < Math.floor(m.length / 2); k++) {
          // for (let j = 1 + k; j < m[0].length - 1; j++) {
          //     mCopy[j][m[0].length - 1 - k] = m[0 + k][j];
          //     mCopy[m[0].length - 1 - k][j] = m[m[0].length - 1-j][m[0].length - 1 - k];
          //     mCopy[j][0 + k] = m[m[0].length - 1 - k][j];
          //     mCopy[0 + k][j] = m[m[0].length - 1 -j][0 + k];
          // }
          for (let j = 1; j < m[0].length - 1; j++) {
              mCopy[j + k][m[0].length - 1 - k] = m[0 + k][j + k];
              mCopy[m[0].length - 1 - k][j + k] = m[m[0].length - 1-(j + k)][m[0].length - 1 - k];
              mCopy[j + k][0 + k] = m[m[0].length - 1 - k][j + k];
              mCopy[0 + k][j + k] = m[m[0].length - 1 - (j + k)][0 + k];
          }
      }
  }

  return mCopy;
}

console.log(rotateOverDiagonals([[1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]]));