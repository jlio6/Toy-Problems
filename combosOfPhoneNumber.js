/**
 * @param {string} digits
 * @return {string[]}
 */

// I: string of digits
// O: array of strings
// C: input will be digits only from 2-9
// E: '' -> []

const phoneMappings = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}

var letterCombinations = function(digits) {
  let result = [];
  if (digits === '') {
      return [];
  }

  const dfs = (position, str) => {
    if (position === digits.length) {
      result.push(str);
    } else {
      for (let i = 0; i < phoneMappings[digits[position]].length; i++) {
        dfs(position + 1, str + phoneMappings[digits[position]][i]);
      }
    }
  }

  dfs(0, '');

  return result;

  // let result = [];
  // for (let i = 0; i < phoneMappings[digits[0]].length; i++) {
  //     result = result.concat(phoneMappings[digits[0]][i] + letterCombinations(digits.slice(1)));
  // }
  // return result;
};

  // if digits is empty, return empty array

  // initialize result array

  // loop through each digit i

// concat to result array letter at digit i,
      // plus result of function call on digits without first
  // return result array

// const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
//      '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

// var letterCombinations = function(D) {
//     let len = D.length, ans = []
//     if (!len) return []
//     const dfs = (pos, str) => {
//         if (pos === len) ans.push(str)
//         else {
//             let letters = L[D[pos]]
//             for (let i = 0; i < letters.length; i++)
//                 dfs(pos+1,str+letters[i])
//         }
//     }
//     dfs(0,"")
//     return ans
// };