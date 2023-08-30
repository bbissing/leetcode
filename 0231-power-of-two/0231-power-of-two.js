/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {

    //edge cases
      // n is equal to 1
      // n is equal to 0 

  if (n === 1 || n === 2) {
    return true;
  }

  if (n === 0) {
    return false;
  }

  function findRoot (num) {
    console.log('num: ', num);

    // let isPowerOfTwo = Number.isInteger(Math.sqrt(num));

    // if (isPowerOfTwo) {
    //   return true;
    // }


    if ((num / 2) % 2 === 0) {
      // let isPowerOfTwo = Number.isInteger(Math.sqrt(num));
      let sqrRoot = Number.isInteger(Math.sqrt(num));
      let isTwo = (num / 2) === 2;

      if (isTwo) {
        return true;
      } else if (sqrRoot) {
        // return true;
        return findRoot(Math.sqrt(num));
      } else {
        return findRoot(num / 2);
      }
    } else {
      return false;
    }
  }

  // return Number.isInteger(Math.sqrt(n));
  return findRoot(n);
};