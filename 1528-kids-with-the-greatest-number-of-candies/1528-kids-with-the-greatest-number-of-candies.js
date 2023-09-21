/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
  let max = 0;
  let result = [];

  function findMax(candies, extraCandies) {
    for (let i = 0; i < candies.length; i++) {
      if (extraCandies) {
        if (candies[i] + extraCandies >= max) {
          result.push(true);
        } else {
          result.push(false);
        }
      } else if (candies[i] > max) {
        max = candies[i];
      }
    }
  }

  findMax(candies);
  findMax(candies, extraCandies);

  return result;
};