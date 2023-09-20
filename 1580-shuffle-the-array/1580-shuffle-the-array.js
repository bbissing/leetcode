/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
  let res = [];
  for (i = 0; i < n; i++) {
      res.push(nums[i],nums[i+n]);
  }
  return res;
};