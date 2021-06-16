const sameFrequency = (inp1, inp2) => {
  num1 = inp1.toString().split('');
  num2 = inp2.toString().split('');

  // find out if the two have the same frequency of digits
  // 182, 281 true
  // 34, 14 false

  //   save new object
  // iterate through first number's digits
  let obj = {};
  for (let i = 0; i < num1.length; i++) {
    //   if digit does not exist, add digit as its key with value 1
    //   if digit exists, add 1 to its value
    obj[num1[i]] ? obj[num1[i]]++ : obj[num1[i]] = 1;
  }
  console.log(obj);
  let result = true;
  for (let j = 0; j < num2.length; j++) {
    if (!obj[num2[j]]) {
      return false;
    }
    obj[num2[j]]--;

    console.log('hey', obj);
  }
  return true;
  // iterate through second numbers digits
  //   if digit exists in obj, minus one from its count
  //   if digit doesnt exist in obj, return false

  //   return true;

}

console.log(sameFrequency(144, 441));
