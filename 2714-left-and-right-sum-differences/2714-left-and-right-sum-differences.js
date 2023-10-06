/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leftRightDifference = function(nums) {
    if (nums.length === 1) {
      return [0];
    }

    let left = nums.slice(0);
    left.unshift(0);
    left.pop();
    let right = nums.slice(0);
    right.push(0);
    right.shift()

    let leftSum = 0;
    let rightSum = 0;

    let result = [];


    for (let i = 1; i < left.length; i++) {
      leftSum = leftSum + left[i];
      left[i] = leftSum;
    }

    for (let j = right.length - 1; j > -1; j--) {
      rightSum = rightSum + right[j];
      right[j] = rightSum;
    }

    for (let k = 0; k < left.length; k++) {
      result.push(Math.abs(left[k] - right[k]));
    }

    return result;
  };