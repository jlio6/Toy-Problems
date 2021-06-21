const sameFrequency = (inp1, inp2) => {
  num1 = inp1.toString().split('');
  num2 = inp2.toString().split('');

  let obj = {};
  for (let i = 0; i < num1.length; i++) {
    obj[num1[i]] ? obj[num1[i]]++ : obj[num1[i]] = 1;
  }
  for (let j = 0; j < num2.length; j++) {
    if (!obj[num2[j]]) {
      return false;
    }
    obj[num2[j]]--;

  }
  return true;
}

console.log(sameFrequency(144, 431));
