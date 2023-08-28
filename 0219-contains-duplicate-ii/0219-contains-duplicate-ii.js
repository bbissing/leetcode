/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
  let obj = {};
  let result = false;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (obj[num] === undefined) {
      obj[num] = [i];
    } else {
      obj[num].push(i);
    }
  }

  console.log('obj: ', obj);

  for (let key in obj) {
    if (obj[key].length > 1) {
      let isTrue = false;
      let diff;
      for (let j = 0; j < obj[key].length - 1; j++) {
        diff = Math.abs(obj[key][j] - obj[key][j + 1]);
        if (diff <= k) {
          isTrue = true;
          break;
        }
      }

      result = isTrue;
      if (isTrue) {
        return true;
      }
    }
  }

  return false;
};