/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const frequency = nums.length/2;
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++
    }
    if (obj[nums[i]] > frequency) {
      return nums[i];
    }
  }

};