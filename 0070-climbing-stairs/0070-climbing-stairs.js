/**
 * @param {number} n
 * @return {number}
 */
let arr = [];
const climbStairs = function(n) {
    if (n <= 2) {
      return n;
    }

    if(arr[n] != undefined) {
      return arr[n];
    }

    arr[n] = climbStairs(n-1) + climbStairs(n-2)

    return arr[n]
};