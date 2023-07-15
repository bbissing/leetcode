/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
      
    if (obj[num] === undefined) {
      obj[num] = 1;
    } else {
      return true;
    }
  }

  return false;
};