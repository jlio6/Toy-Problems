const isAnagram = (string1, string2) => {
  // let string1 be point of referenc
  // create new empty object1
  let obj1 = {};
  // run loop through string1 letter
  if (string1.length !== string2.length) {
    return false;
  }

  for (let letter of string1) {
    //   add letter to object as 1 if doenst exist
    //   if letter exist add 1 to letter count
    obj1[letter] = obj1[letter] ? ++obj1[letter] : 1;
  }
  for (let letter of string2) {
    // create new empty object2
    // run loop through string2 letter
    //   same thing as before
    console.log('obj is ', obj1);
    if (obj1[letter]) {
      obj1[letter]--;
    } else {
      return false;
    }
    // obj1[letter] ? obj1[letter]-- : return false;
  }
  // if stringified obj1 is equal to object2
  // console.log(obj1);
  // console.log(obj2);

  // for (let key of Object.keys(obj1)) {
  //   if (obj1[key] !== obj2[key]) {
  //   //   return true
  //     return false;
  //   }
  // }
  //   otherwise return false
  return true;

}

console.log(isAnagram('piazz', 'pazzi'));