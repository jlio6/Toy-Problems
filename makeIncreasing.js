function makeIncreasing(numbers) {
  let isInOrder = true;
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {
          if (runSwaps(numbers, i)) {
              return true;
          }
          isInOrder = false;
      }
  }
  return isInOrder;
}

function runSwaps(numbers, i) {
  let number = numbers[i].toString().split('');
  let prev = numbers[i - 1] ? numbers[i - 1] : 0;
  let next = numbers[i + 1] ? numbers[i + 1] : Infinity;
  console.log(number);
  if (Number(number[1]) < Number(number[0])) {
      return tempCompare(number, 0, 1, prev, next);
  }
  if (Number(number[2]) < Number(number[1])) {
      return tempCompare(number, 2, 1, prev, next);
  }
  if (Number(number[2]) < Number(number[0])) {
      return tempCompare(number, 2, 0, prev, next);
  }
  return false;
}

function swap(number, x, y) {
  let temp = number[x];
  number[x] = number[y];
  number[y] = temp;
}

function tempCompare(number, x, y, prev, next) {
  swap(number, x, y);
  if (Number(number.join('')) > prev && Number(number.join('')) < next) {
      return true;
  }
  swap(number, x, y);
}

console.log(makeIncreasing([1, 3, 31, 12]));