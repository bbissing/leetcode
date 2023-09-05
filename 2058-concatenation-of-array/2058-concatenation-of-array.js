/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function(nums) {
  let result = nums.concat(nums);

  console.log('result: ', result);
  return result;
};