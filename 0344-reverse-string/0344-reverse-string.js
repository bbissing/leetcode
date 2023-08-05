/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
  let idx = s.length - 1;

  for (let i = 0; i < s.length; i++) {
    if (i !== idx) {
      let temp = s[i];
      let diff = idx - i;
      s[i] = s[idx];
      s[idx] = temp;
      if (diff === 1) {
        break;
      }
      // console.log('s: ', s);
      idx--;
    } else {
      break;
    }
  }

  // console.log('s: ', s);
};