/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const sumIndicesWithKSetBits = function(nums, k) {
  let count = 0
   
  for (let i = 0; i < nums.length; i++) {
    let binaryFormat = parseInt(i, 10).toString(2)
    let arr = binaryFormat.split('').filter(bit => bit == 1)

    if (arr.length === k) {
      count+=nums[i]
    }
  }

  return count;
};