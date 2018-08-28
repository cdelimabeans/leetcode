// Status: In Progress
// Runtime:
// Percentile Rank:

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

var isSubstringOf = function(str,pattern) {
    return str.includes(pattern)
}

var repeatedStringMatch = function(A, B) {
    if (A === B) return 1

    var pointer = 0

    var count = 0;
    var matchFound = false;
    var string = A;
    for (var i = 0; i < B.length; i++) {
        while(A[pointer] != B[i]){
            pointer++
        }
    }

    return count
};

var a = "abcd"
var b = "cdabcdab"
var test = repeatedStringMatch(a, b)

console.log(test, test === 3 ? "PASSED" : "FAILED")

var a = "abcabcabcabc"
var b = "abcd"
var test = repeatedStringMatch(a, b)

console.log(test, test === -1 ? "PASSED" : "FAILED")

var a = "aa"
var b = "a"
var test = repeatedStringMatch(a, b)

console.log(test, test === 1 ? "PASSED" : "FAILED")

var a = "aaaaaaaaaaaaaaaaaaaaaab"
var b = "ba"
var test = repeatedStringMatch(a, b)

console.log(test, test === 2 ? "PASSED" : "FAILED")

var a = "abcabcabcabc"
var b = "abac"
var test = repeatedStringMatch(a, b)

console.log(test, test === -1 ? "PASSED" : "FAILED")

