const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  let midpoint = start + Math.floor((end - start) / 2);
  if (target === array[midpoint]) {
    return midpoint;
  } else if (start >= end) {
    return -1;
  } else if (target > array[midpoint]) {
    return binarySearch(array, target, midpoint + 1, end);
  } else {
    return binarySearch(array, target, start, midpoint - 1);
  }
}

console.log(binarySearch([1, 3, 5, 6, 7, 11, 13, 20, 23], 3));