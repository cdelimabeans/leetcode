/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Status: Accepted
// Runtime: 88ms
// Runtime Percentile: 24.94%

var createMatrix = function(n){
    var matrix = []

    for (var i= 0; i < n; i++){
        matrix[i] = []
    }

    return matrix
};

var wordBreak = function(s, wordDict) {
    var l = 0
    var matrix = createMatrix(s.length)

    while (l < s.length){
        for (var i = 0; i < s.length - l; i++){
            matrix[i][i+l] = isBreakable(s, i, i+l, matrix, wordDict)
        }
        l++
    }

    return matrix[0][s.length -1]
};

var isBreakable = function(s,j,k, matrix, wordDict){
    if (isValid(s,j,k,matrix, wordDict)){
        return true
    } else {
        var i = j
        while(i < k){
            if (isValid(s,j,i,matrix, wordDict) && isValid(s,i+1,k, matrix, wordDict)){
                return true
            }
            i++
        }
        return false
    }
};

var isValid = function(s, j,k, matrix, wordDict){
    if (typeof matrix[j][k] != 'undefined'){
        return matrix[j][k]
    } else {
        return wordDict.indexOf(s.slice(j,k+1)) > -1
    }
};