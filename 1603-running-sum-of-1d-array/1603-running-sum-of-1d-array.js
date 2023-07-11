/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    var arr = nums.slice(0, i+1);
    var sum = 0;
    for (var k = 0; k < arr.length; k++) {
      sum+=arr[k];
    }
    result.push(sum);
  }
  return result;
};