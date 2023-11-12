/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function(items, ruleKey, ruleValue) {
  const obj = {
    type: 0,
    color: 1,
    name: 2
  }

  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i][obj[ruleKey]] === ruleValue) {
      count++;
    }
  }

  return count;
};