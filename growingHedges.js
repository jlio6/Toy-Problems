
// Input: 2d array (0s and 1s), integer (year)
// Output: an integer (adjacent hedges)
// Constraints: None
// Edge Cases: empty array -> 0, integer will be >= 0

const growingHedges = (array, years) => {
  // if entry is 1, hedge will grow around it in 8 directions
  // if entry is 1 and all sides around it are 1, entry will be 0

  // create copy of array
  let copy = array.map(function(arr) {
    return arr.slice();
  });
  // for loop number of years
  for (let k = 0; k < years; k++) {
    // loop through 2d array, index i
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[0].length; j++) {
        // if value at i is 1
        if (array[i][j]) {
          // run helper function that checks 8 directions
          expandHedge(array, copy, i , j);
            // either grow copy in 8 directions or turn itself into 0
        }
      // assign copy to array
      }
    }
    array = copy.map(function(arr) {
    return arr.slice();
  });  }
  // return run helper function to check for adjacent hedges
  return checkAdjacentHedges(array);
}

const expandHedge = (array, copy, i, j) => {
  let allSides = true;
  const options =
    [[i + 1, j],
    [i + 1, j + 1],
    [i + 1, j - 1],
    [i, j - 1],
    [i, j + 1],
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1]];
  for (let k = 0; k < options.length; k++) {
    if (options[k][0] >= array.length || options[k][0] < 0) {
        allSides = false;
        continue;
    }
    if (!array[options[k][0]][options[k][1]]) {
        allSides = false;
        if (array[options[k][0]][options[k][1]] === 0) {
        copy[options[k][0]][options[k][1]] = 1;
    }
    }


  }
  if (allSides) {
    copy[i][j] = 0;
  }
}

// const allSurrounded = (array, i, j) => {
//   if (array[i + 1][j] &&
//     array[i + 1][j + 1] &&
//     array[i + 1][j - 1] &&
//     array[i][j - 1] &&
//     array[i][j + 1] &&
//     array[i - 1][j - 1] &&
//     array[i - 1][j] &&
//     array[i - 1][j + 1]) {
//     return true;
//   }
//   return false;
// }

const checkAdjacentHedges = (array) => {
  // initialize counter at 0
  let counter = 0;
  // for loop through array, index i
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j]) {
        if (array[i][j + 1]) counter++;
        if (i + 1 < array.length) {
            if (array[i + 1][j + 1]) counter++;
            if (array[i + 1][j]) counter++;
            if (array[i + 1][j - 1]) counter++;
        }
      }
    }
  }
  return counter;
    // if value at i is 1
      // if j + 1, counter++
      // if j + 1, i + 1, counter++
      // if i + 1, counter++
      // if i + 1, j - 1, counter++
  // return counter
}

console.log(growingHedges([[1, 0, 0, 0],
 [1, 1, 0, 0],
 [1, 0, 0, 1]]
, 2));