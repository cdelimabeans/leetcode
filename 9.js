/**
 * @param {number} x
 * @return {boolean}
 */

// Status: Accepted
// Runtime: 260ms
// Runtime Percentile: 57.14%

var isPalindrome = function(x) {
    x = x.toString()
    var a = 0;
    var b = x.length -1;

    while (b > a) {
        if (x[a] === x[b]) {
            b--;
            a++;
        } else {
            return false
        }
    }

    return true
};

var test = isPalindrome(121)
console.log(test, test === true)
var test = isPalindrome(-121)
console.log(test, test === false)
var test = isPalindrome(10)
console.log(test, test === false)
