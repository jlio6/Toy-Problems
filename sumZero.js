const sumZero = (array) => {
  // create pointer at first pos
  let firstIndex = 0;
  let firstPointer = array[firstIndex];
  // create pointer at end pos
  let endIndex = [array.length - 1];
  let endPointer = array[endIndex];

  // while first pos is negative and end pos is positive
  while (firstPointer < 0 && endPointer > 0) {
    //   if end pos is greater than absolute val of first pos
    if (endPointer > Math.abs(firstPointer)) {
      endIndex--;
      endPointer = array[endIndex];
      continue;
    }
    //     move end pos 1 index back
    //     continue
    //   if end pos is less than absolute val of first pos
    //     move first pos 1 index up
    //     continue
    if (endPointer < Math.abs(firstPointer)) {
      firstIndex++;
      firstPointer = array[firstIndex];
      continue;
    } else {
      return [firstPointer, endPointer];
    }
    //   if end pos is equal to absolute val of first pos
    //     return array of first and end
  }

    // return undefined
  return undefined;
}

// [0, 2]

console.log(sumZero([-7, -2, 0, 1, 2, 5, 7]));