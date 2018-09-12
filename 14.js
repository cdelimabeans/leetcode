/**
 * @param {string[]} strs
 * @return {string}
 */

// Status: Accepted
// Runtime: 56ms
// Runtime Percentile: 91.85%

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    } else if (strs.length === 1) {
        return strs[0]
    } else {
        var prefix = ''
        for (var i = 0; i < strs[0].length; i++){
            for (var j = 1; j < strs.length; j++){
                if (strs[j].charAt(i) != strs[0].charAt(i)){
                    return prefix
                }
            }

            prefix += strs[0].charAt(i)
        }
        return prefix
    }

};


var test = longestCommonPrefix(["flower","flow","flight"]);
console.log(test, test === "fl");
var test = longestCommonPrefix(["dog","racecar","car"]);
console.log(test, test === "");
