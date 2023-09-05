/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function(nums) {
  let result = [];
  let i = 0;

  while (i < nums.length) {
    result.push(nums[nums[i]]);
    i++;
  }

  return result;
};