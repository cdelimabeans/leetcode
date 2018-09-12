/**
 * @param {string} s
 * @return {boolean}
 */

// Status: Accepted
// Runtime: 56ms
    // Runtime Percentile: 67.92%

var isValid = function(s) {
    var stack = []

    var map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    var keys = new Set(['(','{','['])

    for (var i = 0; i < s.length ; i++){
        if (keys.has(s[i])){
            stack.push(s[i])
        } else if (map[s[i]]){
            if (stack.pop() != map[s[i]]) {
                return false
            }
        }
    }

    return stack.length === 0
};

var test = isValid("()");
console.log(test, test === true);
var test = isValid("()[]{}");
console.log(test, test === true);
var test = isValid("(]");
console.log(test, test === false);
var test = isValid("([)]");
console.log(test, test === false);
var test = isValid("{[]}");
console.log(test, test === true);
