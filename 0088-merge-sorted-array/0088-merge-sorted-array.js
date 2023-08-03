/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// let merge = function(nums1, m, nums2, n) {
//   console.log('nums1 - before: ', nums1);
//     if (n > 0) {
//       if (n === 1 && nums1.length === 1) {
//         // if (m === 1) {
//           nums1.pop();
//           nums1.push(nums2[0]);
//           // nums1.shift();
//         // }
//       } else {
//         nums1.splice(nums1.length - m, m);
//         console.log('nums1 after removing zeroes: ', nums1);
//         if (m === 0) {
//           if (nums1.includes(0)) {
//             console.log('nums1 with zeroes before:', nums1);
//             nums1.splice(0, nums1.length);
//             console.log('nums1 with zeroes after:', nums1);
//           }
//         }

//         for (let i = 0; i < nums2.length; i++) {
//           if (nums1.length === 0) {
//             nums1.push(nums2[i]);
//           } else {
//             for (let j = 0; j < nums1.length; j++) {
//               if (nums2[i] < nums1[j]) {
//                 nums1.splice(j, 0, nums2[i]);
//                 break;
//               } else if (j === nums1.length - 1) {
//                 nums1.push(nums2[i]);
//                 break;
//               }
//            }
//           }
//         }

//         for (let k = 0; k < nums1.length; k++) {
//           if (nums1[k] === 0) {
//             nums1.splice(k, 1);
//             k--;
//           }
//         }
//       }
//     }

//     console.log('nums1 - after: ', nums1);
// };

let merge = function(nums1, m, nums2, n) {
  if (n > 0) {
    let count = 0;
    

    if (n === 1 && nums1.length === 1) {
      // if (m === 1) {
        nums1.pop();
        nums1.push(nums2[0]);
        // nums1.shift();
      // }
    } else {
      for (let k = nums1.length - 1; k > -1; k--) {
        if (nums1[k] !== 0) {
          nums1.splice(k + 1, count);
          break;
        }
        count++;
        if (count === nums1.length) {
          nums1.splice(0, nums1.length);
        }
      }

      for (let i = 0; i < nums2.length; i++) {
        if (nums1.length === 0) {
          nums1.push(nums2[i]);
        } else {
          for (let j = 0; j < nums1.length; j++) {
            if (nums2[i] < nums1[j]) {
              nums1.splice(j, 0, nums2[i]);
              break;
            } else if (j === nums1.length - 1) {
              nums1.push(nums2[i]);
              break;
            }
          }
        }
      }

      // console.log('temp length: ', temp.length, temp);
      // console.log('nums1 length: ', nums1.length, nums1);      

      if (m - n > 0 && m >= nums1.length) {
        // console.log('temp length: ', temp.length);
        // console.log('nums length: ', nums1.length);
        let diff = m - n;
        console.log('diff: ', diff);
        let i = 0;
        while (i < diff) {
          nums1.push(0);
          i++;
        }
      }
    }
  }
};

// merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3);