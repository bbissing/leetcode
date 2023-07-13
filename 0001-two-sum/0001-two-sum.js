/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n2) method
// var twoSum = function(nums, target) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums.length; j++) {
//       if (j !== i) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
//   }
// };

// O(n) method (HashMap)
const twoSum = function(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const k = target - n;
    if (k in obj) {
      return [obj[k], i];
    }
    obj[n] = i;
  }
  return false;
};


twoSum([2,7,11,15], 9);