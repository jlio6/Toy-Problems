const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let temp = array[i];
      array[i] = array[minIdx];
      array[minIdx] = temp;
    }
  }
  return array;
}
// i: 0
// j: 2
// min: 1
// minIdx:
console.log(selectionSort([1, 5, 7, 3, 63, 2, 6, 8, 4, 345 , 2]));