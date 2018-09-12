/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// Solution using JS built-in methods
// Status: Accepted
// Runtime: 56ms
// Runtime Percentile: 99.27%

var numJewelsInStones = function(J, S) {
    var count = 0
    for (var i = 0; i < S.length; i++) {
        if (J.indexOf(S[i]) != -1){
            count++
        }
    }

    return count
};

// Solution without using JS built-in methods
// Status: Accepted
// Runtime: 60ms
// Runtime Percentile: 71.51%

var numJewelsInStones = function(J, S) {
    var map = {}
    var count = 0

    for (var i = 0; i < S.length; i++) {
        map[S[i]] = map[S[i]] || 0
        map[S[i]]++
    }

    for (var j = 0; j < J.length; j++){
        if (map[J[j]]){
            count += map[J[j]]
        }
    }

    return count
};

var test = numJewelsInStones("aA", "aAAbbbb");
console.log(test, test === 3);
var test = numJewelsInStones("z", "ZZ");
console.log(test, test === 0);