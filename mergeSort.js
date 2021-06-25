const mergeTwo = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let results = [];

  while (i < arr1.length && j < arr2.length) {
    while (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    }
    while (arr1[i] >= arr2[j]) {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

const mergeSort = (array) => {
  if (array.length === 1 || !array.length) {
    return array;
  }
  let midpoint = Math.floor(array.length / 2);
  let arr1 = mergeSort(array.slice(0, midpoint));
  let arr2 = mergeSort(array.slice(midpoint));

  return mergeTwo(arr1, arr2);
}

console.log(mergeSort([4, 2, 6, 4, 7, 3, 5, 3, 45, 123]));