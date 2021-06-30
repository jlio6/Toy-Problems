const reverseDigits = (num) => {
  let reversed = 0;
  let numCopy = num;
  let count = 0;
  while (Math.floor(num / Math.pow(10, count)) !== 0) {
    count++;
  }

  while (num !== 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    reversed += digit * Math.pow(10, count - 1);
    count--;
  }
  return reversed;
}

console.log(reverseDigits(12345));