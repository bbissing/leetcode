/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    const obj = {};
    let idx = 0;
    let count = 1;

    for (let i = 0; i < nums.length; i++) {
      if (obj[nums[i]] === undefined) {
        obj[nums[i]] = true;
      } else {
        nums[i] = '_';
      }
    }

    for (let j = 1; j < nums.length; j++) {
      let temp = nums[j];
      if (typeof temp === 'number') {
        nums[j] = nums[idx + 1];
        nums[idx + 1] = temp;
        idx = idx + 1;
        count++;
      }
    }

    return count;
};