/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  let copy = strs.slice();
  let obj = {};
  let result = [];

  for (let i = 0; i < copy.length; i++) {
    copy[i] = copy[i].split('').sort().join('');
  }

  for (let j = 0; j < copy.length; j++) {
    if (obj[copy[j]] === undefined) {
      obj[copy[j]] = [strs[j]]
    } else {
      obj[copy[j]].push(strs[j]);
    }
  }

  for (let key in obj) {
    result.push(obj[key]);
  }

  return result;
};