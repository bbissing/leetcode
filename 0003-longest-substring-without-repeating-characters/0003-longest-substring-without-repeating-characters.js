/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const lengthsOfSubstrings = [];
    let characterFrequency = {};
    let frequencyCount = 0;
    let result = 0;
    
    // iterate through the given string "s"
    for (let i = 0; i < s.length; i++) {
      // for each character (element), make sure to assign the characterFreqency object with the character as the key and its frequency as the value
      // in this case, we would assign the element with a value of "1"
      let character = s[i];
      characterFrequency[character] = 1;
      // add to the counter
      frequencyCount++;
      // then, for each character you iterate through, you need to then iterate through the rest of the string, looking at each character one by one
      for (let j = i + 1; j < s.length; j++) {
        let character = s[j];
        // if the characterFrequency {} does not contain this character as a key ("undefined")
        if (characterFrequency[character] === undefined) {
          // add the character as a key and assign the value of "1"
          characterFrequency[character] = 1;
          // add to the counter
          frequencyCount++;
        } else {
          // if the characterFreqency {} already contains this specific character
          // break from the loop
          break;
        }
      }
      // push the count (from 'frequencyCount') into the lengthsOfSubstrings []
      // the frequency count should have counted only 1 occasion per character
      lengthsOfSubstrings.push(frequencyCount);
      // reassign characterFrequency {} to an empty obj
      characterFrequency = {};
      // reassign frequencyCount int back to zero
      frequencyCount = 0;
    }

    // iterate through the lengthsOfSubstrings []
    for (let k = 0; k < lengthsOfSubstrings.length; k++) {
      // find the longest substring and assign it to result
      if (lengthsOfSubstrings[k] > result) {
        result = lengthsOfSubstrings[k];
      }
    }

    // return result
    return result;
};