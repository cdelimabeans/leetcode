// Status: Accepted
// Runtime: 84ms
// Percentile Rank: 96.27%

/**
 * @param {number} n
 * @return {number}
 */

var memo = {1:1};
var numSquares = function(n) {
    var dp = function (n, memo) {
        var currentMin = n
        var root = Math.sqrt(n)

        if (root % 1 === 0){
            memo[n] = 1
        }

        root = Math.floor(root)
        while (!!!memo[n]){
            var temp = n - (root * root)

            if (memo[temp]){
                currentMin = Math.min(currentMin, 1 + memo[temp])
                if (root <= 2 || currentMin <= 2) {
                    memo[n] = currentMin
                } else {
                    root--;
                }
            } else {
                memo = dp(temp, memo)

            }
        }

        return memo;
    }

    memo = dp(n, memo);

    return memo[n]
};



// var numSquares = function(n) {
//     var memo = {}
//     var x = 1
//
//     while (x <= n){
//         if (Math.sqrt(x) % 1 === 0) {
//             memo[x] = 1
//         } else {
//             var i = x - 1;
//             while (i > 0) {
//                 memo[x] =  Math.min(memo[x] || x, memo[i] + memo[x - i]);
//                 i--
//             }
//         }
//         x++
//     }
//
//     return memo[n]
// };


var test1 = numSquares(12);
var test2 = numSquares(13);
var test3 = numSquares(36);
var test4 = numSquares(48);

console.log(test1 === 3, test1);
console.log(test2 === 2, test2);
console.log(test3 === 1, test3);
console.log(test4 === 3, test4);
