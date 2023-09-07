/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
  let obj = {};
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = [i];
    } else {
      obj[nums[i]].push(i);
    }
  }

  for (let key in obj) {

    if (obj[key].length > 2) {
      let j = obj[key].length - 1;
      while (j > 0) {
        total += j;
        j--;
      }
    } else {
      total += obj[key].length - 1;
    }
  }

  console.log('obj: ', obj);
  console.log('total: ', total);
  return total;
};