/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  // edge case: if the length of the flowerbed is equal to one
  if (flowerbed.length === 1) {
    // if element is equal to zero
    if (flowerbed[0] === 0) {
      // return true
      return true;
      // else if there is a flower planted and there are zero additional flowers to be planted
    } else if (flowerbed[0] === 1 && n === 0) {
      // return true;
      return true;
    }
    // return false
    return false;
  }


  // loop through given array
  for (let i = 0; i < flowerbed.length; i++) {
    // check to see if current element is equal to zero
    // if element is equal to zero
    if (flowerbed[i] === 0) {
      // if index is equal to zero (the first element)
      if (i === 0) {
        // if the element to its right is equal to zero
        if (flowerbed[i + 1] === 0) {
          // change that element to equal to one
          flowerbed[i] = 1;
          // add to counter
          count++;
        }
      }

      // if index is equal to given array's length minus 1 (the last element)
      else if (i === flowerbed.length - 1) {
        // if the element to its left is equal to zero
        if (flowerbed[i - 1] === 0) {
          // change that element to equal to one
          flowerbed[i] = 1;
          // add to counter
          count++;
        }
      }
        
       // else check to see if adjacent elements (both left and right) are equal to zero
       // if they are both equal to zero
       else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
         // change existing element to equal to one
         // console.log('test: ', i, flowerbed[i]);
         flowerbed[i] = 1;
         // add to counter
         count++;
       }
    }
  }
    
  // if the counter is greater or equal to n
  if (count >= n) {
    // return true
    console.log('count: ', count);
    console.log('flowerbed: ', flowerbed);
    return true;
  // else
  } else {
    console.log('count: ', count);
    console.log('flowerbed: ', flowerbed);
    // return false 
    return false;
  }
};