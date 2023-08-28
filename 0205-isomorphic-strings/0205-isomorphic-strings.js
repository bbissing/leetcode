/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    let characterIndices = {
      s: {},
      t: {}
    };

    function findIndex (str, signal) {
      for (let i = 0; i < str.length; i++) {
        if (characterIndices[signal][str[i]] === undefined) {
          characterIndices[signal][str[i]] = [i];
        } else {
          characterIndices[signal][str[i]].push(i);
        }
      }
    }

    findIndex(s, 's');
    findIndex(t, 't');
    
    let tempObjOne = Object.values(characterIndices)[0];
    let tempObjTwo = Object.values(characterIndices)[1];
    let tempArrOne = Object.values(tempObjOne).sort((a, b) => a - b);
    let tempArrTwo = Object.values(tempObjTwo).sort((a, b) => a - b);

    if (JSON.stringify(tempArrOne) === JSON.stringify(tempArrTwo)) {
      return true;
    }

    return false;
};