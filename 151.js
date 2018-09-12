/**
 * @param {string} str
 * @returns {string}
 */

// Status: Accepted
// Runtime: 60ms
// Runtime Percentile: 52.86%

var reverseWords = function(str) {
    var words = str.split(/ +/)
    words = words.filter((word) => word != "")
    return words.reverse().join(' ')
};

var test = reverseWords()