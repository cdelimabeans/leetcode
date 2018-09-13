/**
 * @param {string} s
 * @return {boolean}
 */

// Status: Accepted
// Runtime: 72ms
// Runtime Percentile: 75.38%

var isPalindrome = function(s) {
    var str = s.replace(/ /g, '')
    if (str.length === 0){
        return true
    } else {
        str = s.toLowerCase().replace(/[^a-z||\d]/gi, '')

        return str.split('').reverse().join('') === str
    }
};
