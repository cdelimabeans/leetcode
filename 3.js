/**
 * @param {string} s
 * @return {number}
 */

// O(n) solution without built-in methods
// Notes: https://tinyurl.com/y9p4gxlx
// Status: Accepted
// Runtime: 176ms
// Percentile Rank: 35.74%
var lengthOfLongestSubstring1 = function(s) {
    if (s.length < 2){
        return s.length
    }

    var map = {}
    var count = 0
    var max = Number.MIN_VALUE
    var start = 0

    for (var i = 0; i < s.length; i++){

        if (map[s[i]] != null && map[s[i]] >= start){
            max = Math.max(max, count)
            count = i - map[s[i]] - 1
            start = map[s[i]] + 1
        }

        count++
        map[s[i]] = i
    }

    max = Math.max(max, count)

    return max
};

// Using JS built-in methods
// Status: Accepted
// Runtime: 100ms
// Percentile Rank: 78.98%
var lengthOfLongestSubstring = function(s){
    if (s.length < 2){
        return s.length
    }

    var count = 0
    var max = Number.MIN_VALUE
    var start = 0

    for (var i = 0; i < s.length; i++){
        count++
        var index = s.indexOf(s[i], start)
        if (index > -1 && index != i) {
            max = Math.max(max, count-1)
            count = i - index
            start = index + 1
        }
    }

    return Math.max(max, count)
}

var test = lengthOfLongestSubstring("abcabcbb")
console.log(test, test === 3)
var test = lengthOfLongestSubstring("bbbb")
console.log(test, test === 1)
var test = lengthOfLongestSubstring("pwwkew")
console.log(test, test === 3)
var test = lengthOfLongestSubstring(" ")
console.log(test, test === 1)
var test = lengthOfLongestSubstring("dvdf")
console.log(test, test === 3)
var test = lengthOfLongestSubstring("abba")
console.log(test, test === 2)
var test = lengthOfLongestSubstring("wobgrovw")
console.log(test, test === 6)
var test = lengthOfLongestSubstring("cdd")
console.log(test, test === 2)
