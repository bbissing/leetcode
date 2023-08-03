/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let temp = s.replace(/[_\W]/g, '');
    temp = temp.toLowerCase();
    let reverse = temp.split('').reverse().join('');

    let result = temp === reverse ? true: false;

    return result;
};
