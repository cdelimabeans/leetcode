/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Status: Accepted
// Runtime: 64ms
// Runtime Percentile: 66.50%

var addBinary = function(a, b) {
    //add leading zeros
    if (a.length < b.length){
        a = a.padStart(b.length, "0")
    } else if (b.length < a.length){
        b = b.padStart(a.length, "0")
    }


    var i = a.length -1
    var carry = 0
    var result = ""

    while (i >= 0){
        var x = parseInt(a[i])
        var y = parseInt(b[i])

        if (x && y){
            if (carry){
                result= result.padStart(result.length+1,"1")
            } else {
                result = result.padStart(result.length+1,"0")
            }
            carry = 1
        } else {
            result = result.padStart(result.length+1,(!(!x != !y) != !carry) ? "1" : "0")
            carry = (x && y) || (y && carry) || (carry && x)
        }
        i--
    }

    if (carry){
        result= result.padStart(result.length+1,"1")
    }

    return result
};