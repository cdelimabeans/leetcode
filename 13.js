/**
 * @param {string} s
 * @return {number}
 */

// Solution from a year ago
// Status: Accepted
// Runtime: 222ms
// Runtime Percentile: 7.65%

var romanToInt = function(s) {
    const guide = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let sum = 0
    let i = 0

    while(i < s.length){
        if (guide[s[i]] < guide[s[i+1]]){
            sum += (guide[s[i+1]] - guide[s[i]])
            i = i+2
        } else {
            sum += guide[s[i]]
            i++
        }
    }
    return sum
};

var test = romanToInt("MCMXCIV");
console.log(test, test === 1994 );
var test = romanToInt("LVIII");
console.log(test, test === 58 );
var test = romanToInt("IX");
console.log(test, test === 9 );
var test = romanToInt("IV");
console.log(test, test === 4 );
var test = romanToInt("III");
console.log(test, test === 3 );