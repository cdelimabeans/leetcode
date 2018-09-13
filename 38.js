/**
 * @param {number} n
 * @return {string}
 */

// Status: Accepted
// Runtime: 52ms
// Runtime Percentile: 99.60%

var countAndSay = function(n) {
    var str = '1'
    var result = ''

    while (n > 1) {
        var count = 1
        var current = str[0]
        for (var i = 1; i <= str.length - 1; i++) {
            if (str[i] !== current){
                result += count + current
                count = 1
                current = str[i]
            } else {
                count++
            }
        }

        result += count + current
        str = result
        result = ''
        n--
    }
    return str
};