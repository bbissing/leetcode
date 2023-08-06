/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = [];
    let idx;
    s = s.split('');

    for (let i = 0; i < s.length; i++) {
      let letter = s[i];
      for (let j = 0; j < vowels.length; j++) {
        if (letter.toLowerCase() === vowels[j]) {
          arr.push(i);
        }
      }
    }

    console.log('arr: ', arr);
//
    idx = arr.length - 1;

    for (let k = 0; k < arr.length; k++) {
      let temp = s[arr[k]];
      console.log('temp: ', temp);

      if (k === idx || idx - k === 1) {
        if (k === idx) {
          break;
        } else {
          // console.log('test', s[arr[idx]]);
          s[arr[k]] = s[arr[idx]];
          // console.log('letters: ', s[1], s[4]);
          // s[1] = 'o';
          // console.log('s: ', s);
          s[arr[idx]] = temp;
          // console.log('s: ', s);
          break;
        }
      }

      s[arr[k]] = s[arr[idx]];
      s[arr[idx]] = temp;
      idx--;
    }

    s = s.join('');
    console.log('s: ', s);
    return s;
};