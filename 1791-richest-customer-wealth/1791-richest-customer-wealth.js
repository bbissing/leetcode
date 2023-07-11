/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  var result = 0;
  for (var i = 0; i < accounts.length; i++) {
    var sum = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      sum+=accounts[i][j];
    }
    if (result < sum) {
      result = sum;
    }
  }

  return result;
};