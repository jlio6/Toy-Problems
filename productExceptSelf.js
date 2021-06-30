const productExceptSelf = (array) => {
  // array = [1, -5, 2, 6, 4]

  // left =  [1, 1, -5, -10, -60]
  // right = [1, 4, 24, 48, -240]
  // [-240, 48, -120, -40, -60]

  let leftArray = [1];
  let rightArray = [1];
  let output = [];
  for (let i = 1; i < array.length; i++) {
    leftArray.push(leftArray[i - 1] * array[i - 1]);
    rightArray.push(rightArray[i - 1] * array[array.length - i]);
  }
  for (let i = 0; i < array.length; i++) {
    output.push(leftArray[i] * rightArray[array.length - i - 1]);
  }
  return output;

}

console.log(productExceptSelf([1, -5, 2, 6, 4]));