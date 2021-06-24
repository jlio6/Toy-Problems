const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      } else {
        break;
      }
    }
  }

  return array;
}

console.log(insertionSort([3, 5, 2, 6, 8, 3, 6, 2, 363, 58, 465, 2]));