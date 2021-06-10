const sumZero = (array) => {
  let firstIndex = 0;
  let endIndex = [array.length - 1];

  while (array[firstIndex] < 0 && array[endIndex] > 0) {
    if (array[endIndex] > Math.abs(array[firstIndex])) {
      endIndex--;
    } else if (array[endIndex] < Math.abs(array[firstIndex])) {
      firstIndex++;
    } else {
      return [array[firstIndex], array[endIndex]];
    }
    //   if end pos is equal to absolute val of first pos
    //     return array of first and end
  }

    // return undefined
  return undefined;
}

// [0, 2]

console.log(sumZero([-6, -2, 0, 1, 2, 5, 7]));