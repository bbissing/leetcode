/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var obj = {};

    for (var i = 0; i < ransomNote.length; i++) {
      if (obj[ransomNote[i]] === undefined) {
        obj[ransomNote[i]] = 1;
      } else {
        obj[ransomNote[i]]++;
      }
    }

    for (var j = 0; j < magazine.length; j++) {
      if(obj[magazine[j]] !== undefined) {
        obj[magazine[j]]--;
      }
    }

    for (var key in obj) {
      if (obj[key] > 0) {
        return false;
      }
    }

    return true;
};