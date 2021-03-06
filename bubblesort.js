const bubbleSort = (array) => {
  let swapped;
  for (let j = array.length - 1; j > 0; j--) {
    swapped = false;
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort([5, 2, 4, 1, 787, 34, 1, 1, 56, 34, 34, 5, 4]));