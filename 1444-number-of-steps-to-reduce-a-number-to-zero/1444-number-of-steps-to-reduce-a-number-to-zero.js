/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    var count = 0;

    var innerFunc = function(num) {
      if (num !== 0) {
        if (num % 2 === 0) {
          num = num/2;
          count++;
          innerFunc(num);
        } else {
          num = num-1;
          count++;
          innerFunc(num);
        }
      }
    };

    innerFunc(num);
    return count;
};