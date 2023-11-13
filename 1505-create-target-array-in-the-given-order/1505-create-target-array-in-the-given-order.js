/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function(nums, index) {
  let target = []

  for (let i = 0; i < nums.length; i++) {
    let idx = index[i];

    if (target[idx] !== undefined) {
      target.splice(idx, 0, nums[i])
    } else {
      target[idx] = nums[i]
    }
  }

  return target
};