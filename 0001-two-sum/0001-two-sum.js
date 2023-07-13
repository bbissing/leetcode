/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (j !== i) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

twoSum([2,7,11,15], 9);