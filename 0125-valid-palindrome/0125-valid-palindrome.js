/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let temp = s.replace(/[_\W]/g, '');
    // let temp = s.replace([^0-9a-z], '');
    temp = temp.toLowerCase();
    console.log('temp: ', temp);
    let reverse = temp.split('').reverse().join('');
    console.log('reverse: ', reverse);

    let result = temp === reverse ? true: false;
    console.log('result: ', result);

    return result;
};