/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target || target < nums[i]) {
        return i;
      }

      if (target < nums[i + 1]) {
        return i + 1;
      }
    }

    return nums.length;
};