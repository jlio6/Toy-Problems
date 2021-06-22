const averagePair = (array, target) => {
  // set first pointer at position 0
  let point1 = 0;
  // set second pointer at last position
  let point2 = array.length - 1;
  // calculate the average

  // while second pointer is greater than first pointer
  while (point2 > point1) {
    let avg = array[point1] + (array[point2] - array[point1]) / 2;
    console.log(avg);
    // if the average matches the target, return true
    if (avg === target) {
      return true;
    }
    // if not
    if (avg < target) {
      point1++;
    }
      // while average is less than target
        // move second pointer back 1
      // while average is greater than target
    if (avg > target) {
      point2--;
    }
        // move first pointer up 1
    // return false
  }
  return false;
}

console.log(averagePair([0, 1, 2, 3], 2.5));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));