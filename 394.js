/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var stack = [];
    var digits = [];
    var str = "";
    var strTemp = "";
    var digitTemp = "";

    for (var i = 0; i < s.length; i++){
        if ((/\d/).test(s[i])) {
            if (strTemp.length > 0) {
                while (stack.length >= digits.length){
                    strTemp = stack.pop() + strTemp
                }

                stack.push(strTemp);
                strTemp = ""
            }
            digitTemp += s[i]
        } else if (s[i] === '['){
            digits.push(digitTemp);
            digitTemp = ""
        } else if (s[i] === ']'){
            let temp = digits.pop();
            if (digits.length < stack.length){
                strTemp = stack.pop() + strTemp
            }
            if (digits.length === 0) {
                str += (strTemp.repeat(temp));
                strTemp = ""
            } else {
                strTemp = strTemp.repeat(temp)
            }
        } else {
            if (digits.length > 0){
                strTemp += s[i]
            } else {
                str += s[i]
            }
        }
    }
    if (strTemp.length > 0){
        str += strTemp
    }
    return str
};

var test1 = decodeString("3[a]2[bc]");
var test2 = decodeString("3[a2[c]]");
var test3 = decodeString("2[abc]3[cd]ef");
var test4 = decodeString("z2[abc]3[cd]ef");
var test5 = decodeString("x3[z]2[2[y]pq4[2[jk]e1[f]]]ef");
var test6 = decodeString("z10[a]2[b4[F]c2[x2[y]]]ef");

console.log(test1 === "aaabcbc", test1);
console.log(test2 === "accaccacc", test2);
console.log(test3 === "abcabccdcdcdef", test3);
console.log(test4 === "zabcabccdcdcdef", test4);
console.log(test5 === "xzzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef", test5);
console.log(test6 === "zaaaaaaaaaabFFFFcxyyxyybFFFFcxyyxyyef", test6);
