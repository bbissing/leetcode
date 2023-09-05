/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function(operations) {
  let total = 0;

  operations.forEach(operation => {
    if (operation === '--X' || operation === 'X--') {
      total--;
    } else {
      total++;
    }
  })

  return total;
};