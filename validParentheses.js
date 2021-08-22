/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

  const dict = {
      '(': ')',
      '[': ']',
      '{': '}'
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
      if (dict[s[i]]) {
          stack.push(dict[s[i]]);
      } else if (s[i] !== stack[stack.length - 1]) {
          return false;
      } else {
          stack.pop();
      }
  }
  if (!stack.length) {
      return true;
  } else {
      return false;
  }


  // for (let i = 0; i < s.length; i++) {
  //     if (s[i] === '(') {
  //         if (s.slice(i).indexOf(')') > 0) {
  //             if (s.slice(i + 1, s.slice(i + 1).indexOf(')') + i + 1).includes('}') ||
  //                s.slice(i + 1, s.slice(i + 1).indexOf(')') + i + 1).includes(']')) {
  //                 return false;
  //             }
  //         } else {
  //             return false;
  //         }
  //     }
  //     if (s[i] === '[') {
  //         if (s.slice(i).indexOf(']') > 0) {
  //             console.log(s.slice(i + 1, s.slice(i + 1).indexOf(')') + i + 1));
  //             console.log(s.slice(i + 1).indexOf(')'));
  //             if (s.slice(i + 1, s.slice(i + 1).indexOf(']') + i + 1).includes('}') ||
  //                s.slice(i + 1, s.slice(i + 1).indexOf(']') + i + 1).includes(')')) {
  //                 return false;
  //             }
  //         } else {
  //             return false;
  //         }
  //     }
  //     if (s[i] === '{') {
  //         if (s.slice(i).indexOf('}') > 0) {
  //             if (s.slice(i + 1, s.slice(i + 1).indexOf('}') + i + 1).includes(')') ||
  //                s.slice(i + 1, s.slice(i + 1).indexOf('}') + i + 1).includes(']')) {
  //                 return false;
  //             }
  //         } else {
  //             return false;
  //         }
  //     }
  // }
  // return true;



};