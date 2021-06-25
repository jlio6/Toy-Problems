const swap = (array, idx1, idx2) => {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

const quickPivot = (array, start = 0, end = array.length) => {
  let pivot = array[start];
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, i, swapIdx);
    }
  }
  swap(array, start, swapIdx);
  // console.log(array);

  return swapIdx;
}

const quickSort = (array, left = 0, right = array.length) => {
  if (left < right) {
    let swapIdx = quickPivot(array, left, right); // returns swapIdx
    quickSort(array, left, swapIdx - 1);
    quickSort(array, swapIdx + 1, right);
  }
  return array;
  // if (swapIdx <= 1) {

  // }


}

console.log(quickSort([3, 6, 2, 7, 4, 8, 4, 5, 1, 2]));