// Status: Accepted
// Runtime: 52ms
// Percentile Rank: 100%

/**
 * @param {string} time
 * @return {string}
 */

var nextClosestTime = function(time) {
    // loop through digits
    // get set of digits, sorted
    // loop from end of time
    // check if time[i] has a logical higher replacement, replace then finish
    // if not, replace with lowest then i++

    var digits = [...(new Set(time.split(/(\d):(\d)/))).keys()].sort();
    if (digits.length === 1){
        return time
    }

    var arr = time.split('');

    for (var i = arr.length -1; i >= 0; i--) {
        let char = arr[i]

        if (char != ":"){
            var c = digits.indexOf(char);
            if (c < digits.length - 1){
                arr.splice(i, 1, digits[c+1])
                if (isValid(arr.join(''))){
                    return arr.join('')
                } else {
                    arr.splice(i, 1, digits[0])
                }
            } else {
                arr.splice(i, 1, digits[0]);
            }
        }
    }
    
    return arr.join('')
};

var isValid = function(time){
    return (/^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/).test(time)
}

console.log(nextClosestTime("11:34")); //11:41
console.log(nextClosestTime("21:34")); //21:41
console.log(nextClosestTime("23:59")); //22:22
console.log(nextClosestTime("11:11")); //11:11