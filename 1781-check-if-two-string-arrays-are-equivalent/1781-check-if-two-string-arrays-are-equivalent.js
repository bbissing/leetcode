/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = function(word1, word2) {

  word1 = word1.join('')
  word2 = word2.join('')

  // const iterate = (word) => {
  //   let str = '';

  //   for (let i = 0; i < word.length; i++) {
  //     str += word[i]
  //   }

  //   return str;
  // }

  // const firstWord = iterate(word1);
  // const secondWord = iterate(word2);

  // if (firstWord === secondWord) {
  //   return true
  // }

  // return false

  return word1 === word2 ? true : false

};