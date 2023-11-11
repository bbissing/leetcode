/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = function(word1, word2) {
  const words = [];

  const iterate = (word) => {
    let str = '';

    for (let i = 0; i < word.length; i++) {
      str += word[i]
    }

    words.push(str);
  }

  iterate(word1);
  iterate(word2);

  if (words[0] === words[1]) {
    return true
  }

  return false
};