const countUniqueValues = (array) => {
  if (array.length === 0) {
    return 0;
  }
  let first = 0;
  let second = 1;
  let count = 1;

  while (second < array.length - 1) {
    while (array[second] === array[first]) {
      second++;
    }
    if (second < array.length) {
      count++;
    }
    first = second;
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1]));