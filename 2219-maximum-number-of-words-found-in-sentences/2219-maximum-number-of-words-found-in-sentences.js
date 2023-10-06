/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = function(sentences) {
    let max = 0;

    sentences.forEach(sentence => {
      let arr = sentence.split(' ');
      if (arr.length > max) {
        max = arr.length;
      }
    })

    return max;
};