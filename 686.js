// Status: In Progress
// Runtime:
// Percentile Rank:

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

// Using KMP algorithm
// Status: Passed
// Runtime: 76ms
// Percentile Rank: 37.89%

var KMPmatch = function(A, B, nextIndexArr){
    var a = 0
    var b = 0

    while(b < B.length && a < A.length){
        if (A[a] === B[b]){
            a++
            b++
        } else if (b > 0){
            b = nextIndexArr[b-1]
        } else {
            a++
        }
    }

    if (b === B.length){
        return true
    }

    return false
}

var createNextIndexArr = function(str){
    var nextIndex = [0]
    var i = 1
    var j = 0

    while(i < str.length){
        if (str[j] === str[i]){
            nextIndex.push(j+1)
            j++
            i++
        } else if (j > 0){
            j = nextIndex[j-1]
        } else {
            nextIndex.push(0)
            i++
        }
    }

    return nextIndex
}

var repeatedStringMatchUsingKMP = function(A,B){
    var counter = 1
    var newStr = A

    // B cannot be a substring of A if A.length < B.length
    while (newStr.length < B.length) {
        newStr += A
        counter++
    }

    //create nextIndex outside of KMP match so it doesn't get recreated at every call of the function
    var nextIndexArr = createNextIndexArr(B)

    if (KMPmatch(newStr, B, nextIndexArr)){
        return counter
    }

    // edge case: when unique character in B or A and B can never be substring of any multiples of A
    // solution: if no pattern match after k multiples of A where A.length > B.length, then B will never show up

    newStr += A
    counter++

    if (KMPmatch(newStr, B, nextIndexArr)){
        return counter
    }

    return -1

}

// using Javascript's includes String method
// Status: Passed
// Runtime: 56ms
// Percentile Rank: 84.21%

var repeatedStringMatch = function(A,B){
    var counter = 1
    var newStr = A

    // B cannot be a substring of A if A.length < B.length
    while (newStr.length < B.length) {
        newStr += A
        counter++
    }

    if (newStr.includes(B)){
        return counter
    }

    // edge case: when unique character in B or A and B can never be substring of any multiples of A
    // solution: if no pattern match after k multiples of A where A.length > B.length, then B will never show up

    newStr += A
    counter++

    if (newStr.includes(B)){
        return counter
    }

    return -1

}

var a = "abcd"
var b = "cdabcdab"
var test = repeatedStringMatch(a, b)

console.log(test, test === 3 ? "PASSED" : "FAILED")

var a = "abcabcabcabc"
var b = "abcd"
var test = repeatedStringMatch(a, b)

console.log(test, test === -1 ? "PASSED" : "FAILED")

var a = "aa"
var b = "a"
var test = repeatedStringMatch(a, b)

console.log(test, test === 1 ? "PASSED" : "FAILED")

var a = "aaaaaaaaaaaaaaaaaaaaaab"
var b = "ba"
var test = repeatedStringMatch(a, b)

console.log(test, test === 2 ? "PASSED" : "FAILED")

var a = "abcabcabcabc"
var b = "abac"
var test = repeatedStringMatch(a, b)

console.log(test, test === -1 ? "PASSED" : "FAILED")

var a = "aaac"
var b = "aac"
var test = repeatedStringMatch(a, b)

console.log(test, test === 1 ? "PASSED" : "FAILED")

var a = "abababaaba"
var b = "aabaaba"
var test = repeatedStringMatch(a, b)

console.log(test, test === 2 ? "PASSED" : "FAILED")

var a = "abaabaa"
var b = "abaababaab"
var test = repeatedStringMatch(a, b)

console.log(test, test === -1 ? "PASSED" : "FAILED")

var a = "baaabbbaba"
var b = "baaabbbababaaabbbababaaabbbababaaabbbababaaabbbababaaabbbababaaabbbababaaabbbababaaabbbababaaabbbaba"
var test = repeatedStringMatch(a, b)

console.log(test, test === 10 ? "PASSED" : "FAILED")

var a = "aabaaabaaac"
var b = "aabaaac"
var test = repeatedStringMatch(a, b)

console.log(test, test === 1 ? "PASSED" : "FAILED")




