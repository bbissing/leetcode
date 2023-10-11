/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let arr = [];
  let results = [];
  // if length of nums is equal to 1
  if (nums.length === 1) {
    // return [nums[0]]
    return [nums[0]]
  }

  // console.log('nums: ', nums);
  // console.log('k: ', k);

  // utilize a hashmap
    // keys represent the element itself
    // values represent key's frequency
  let maps = {}

  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    // if the current num is not defined in the hashmap
    if (maps[nums[i]] === undefined) {
      // define it by setting it to 1
      maps[nums[i]] = 1
    // otherwise
    } else {
      // increase its value (or fequency count) in the hashmap
      maps[nums[i]]++
    }
  }
  
  // console.log('map: ', maps);
  // iterate the hashmap
  for (let key in maps) {
    // define an empty object
    // the object will contain two keys: num and count
    // num represents the map's key
    // count represent the frequency of the map's key
    // push this object into a global array
    // do these steps for each key
    let obj = {
      num: key,
      value: maps[key]
    };

    arr.push(obj);
  }

  // sort the array by value from largest to smallest
  arr.sort((a, b) => b.value - a.value);
  // this wil sort the frequency from largest to smallest
  console.log('arr: ', arr);

  // loop through the array up to k
  for (let j = 0; j < k; j++) {
    // push the num value of each object you iterate through into the results array
    results.push(arr[j].num);
  }


  // console.log('results: ', results);
  return results
}