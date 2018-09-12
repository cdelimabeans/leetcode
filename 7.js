/**
 * @param {number} x
 * @return {number}
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

// Solution from a year ago
// Status: Accepted
// Runtime: 212 ms
// Runtime Percentile: unknown
var reverse = function(x) {
    let reverse = 0

    if (x < 0){
        reverse = parseInt(String(x).split('').reverse().join('')) * -1
    } else {
        reverse = parseInt(String(x).split('').reverse().join(''))
    }

    // handle overflow
    if (reverse < Math.pow(-2,31) || reverse > Math.pow(2,31) ){
        return 0
    } else {
        return reverse
    }
};

var test = reverse(123);
console.log(test, test === 321);
var test1 = reverse(-123);
console.log(test1, test1 === -321);
var test1 = reverse(1534236469);
console.log(test1, test1 === 0);
var test1 = reverse(-1534236469);
console.log(test1, test1 === 0);
var test1 = reverse(-2147483412);
console.log(test1, test1 === -2143847412);