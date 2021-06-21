// const areThereDuplicates = (...args) => {

//   for (let i = 0; i < args.length; i++) {
//     if (obj[args[i]]) {
//       return true;
//     }
//     obj[args[i]] = 1;
//   }
//   return false;
// }

// console.log(areThereDuplicates(1, 2, 6, 4, 5, 6));

const areThereDuplicates = (...args) => {

  args.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < args.length; i++) {
    let pointer1 = args[i];
    let pointer2 = args[i + 1];
    if (pointer2 === pointer1) {
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 6));