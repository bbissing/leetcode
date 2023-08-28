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
    
    // console.log('characterIndices: ', characterIndices);
    
    let tempObjOne = Object.values(characterIndices)[0];
    let tempObjTwo = Object.values(characterIndices)[1];
    let tempArrOne = Object.values(tempObjOne).sort((a, b) => a - b);
    let tempArrTwo = Object.values(tempObjTwo).sort((a, b) => a - b);

    // console.log('characterIndices: ', Object.values(characterIndices)[0]);

    // console.log('tempObjOne: ', tempObjOne);
    // console.log('tempObjTwo: ', tempObjTwo);

    // console.log('tempObjOne - Keys: ', Object.values(tempObjOne));
    // console.log('tempArrOne: ', JSON.stringify(tempArrOne));
    // console.log('tempArrTwo: ', JSON.stringify(tempArrTwo));

    // console.log('boolean: ', JSON.stringify(tempArrOne) === JSON.stringify(tempArrTwo));

    if (JSON.stringify(tempArrOne) === JSON.stringify(tempArrTwo)) {
      return true;
    }

    return false;
};