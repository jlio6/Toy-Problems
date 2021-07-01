const getDigit = (num, digit) => {
  // 12345, 2 => 4
  // let length = num.toString().length;
  // if (digit > length) {
  //   return 0;
  // }
  // return Number(num.toString()[length - digit]);

  return Math.floor(num / Math.pow(10, digit - 1)) % 10;
}

const digitCount = (num) => {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(num)) + 1;
}

const mostDigits = (array) => {
  let max = digitCount(array[0]);
  for (let num of array) {
    max = Math.max(digitCount(num), max);
  }
  return max;
}

const radixSort = (array) => {
  let k = mostDigits(array);
  for (let i = 1; i <= k; i++) {
    let bucket = [];
    for (let i = 0; i < 10; i++) {
      bucket.push([]);
    }
    for (let j = 0; j < array.length; j++) {
      let currentDigit = getDigit(array[j], i);
      bucket[currentDigit].push(array[j]);
    }
    array = [].concat(...bucket);
  }
  return array;
}

console.log(radixSort([1, 6, 3, 6, 245, 76, 45, 23, 1]));