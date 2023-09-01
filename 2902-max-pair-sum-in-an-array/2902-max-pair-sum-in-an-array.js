/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSum = function(nums) {
    let sums = [];
    let max;

    for (let i = 0; i < nums.length; i++) {
      let copy = nums.slice(i + 1);

      for (let j = 0; j < copy.length; j++) {
        let sum = nums[i] + copy[j];
        // let str = sum.toString().split('');
        // console.log('str: ', str);

     
          // let temp1 = nums[i].toString().split('').toSorted();
          let temp1 = nums[i].toString().split('').map(Number).sort((a,b) => a - b);
          let temp2 = copy[j].toString().split('').map(Number).sort((a,b) => a - b);
          // let temp2 = copy[j].toString().split('').toSorted();
          // console.log('nums[i]: ', nums[i]);
          // let temp = nums[i].toString().split('').map(Number);
          // console.log('temp: ', temp);
          // console.log('temp sorted: ', temp.sort((a, b) => a - b));
          // console.log('nums[i]: ', nums[i]);
          // let filtered = str.filter(num => num !== str[0]);
          // if (filtered.length === 0) {
          //   sums.push(sum);
          // }
          if (temp1[temp1.length - 1] === temp2[temp2.length - 1]) {
            sums.push(sum);
          }
        
        // let result = str.filter(num => num !== str[0]);
        // console.log('result: ', result);
        // if (result.length === 0) {
        //   sums.push(sum);
        // }
      }
    }

    max = sums[0];

    for (let k = 1; k < sums.length; k++) {
      if (sums[k] > max) {
        max = sums[k];
      }
    }

    // console.log('sums: ', sums);
    // console.log('max: ', max);

    if (max === undefined) {
      return -1;
    }

    return max;
};