/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function(nums) {
  const result = []
    for (let i = 1; i < nums.length; i+=2) {
      let j = 0
      while (j < nums[i - 1]) {
        result.push(nums[i])
        j++
      }
    }

  return result
};