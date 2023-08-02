/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let myPow = function(x, n) {
    function innerFunc(x, n) {
        if (x === 0) {
            return 0;
        }
        if (n === 0) {
            return 1;
        }

        let res = innerFunc(x, Math.floor(n / 2));
        res = res * res;

        if (n % 2 === 1) {
            return res * x;
        }

        return res;
    }

    let result = innerFunc(x, Math.abs(n));

    if (n >= 0) {
        return result;
    }

    return 1 / result;
};