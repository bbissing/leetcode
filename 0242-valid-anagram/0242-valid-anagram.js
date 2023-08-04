/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sMap = {};
    let tMap = {};

    for (let i = 0; i < s.length; i++) {
      if (sMap[s[i]] === undefined) {
        sMap[s[i]] = 1;
      } else {
        sMap[s[i]]++;
      }
    }

    for (let j = 0; j < t.length; j++) {
      if (tMap[t[j]] === undefined) {
        tMap[t[j]] = 1;
      } else {
        tMap[t[j]]++;
      }
    }

    for (let key in tMap) {
      if(sMap[key] === undefined || tMap[key] !== sMap[key]) {
        return false;
      }
    }

    for (let key in sMap) {
      if(tMap[key] === undefined || sMap[key] !== tMap[key]) {
        return false;
      }
    }

    return true;
};