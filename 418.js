/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */

// Status: Accepted
// Runtime: 4528ms
// Percentile rank: 26.32%

// var wordsTyping = function(sentence, rows, cols) {
//     var count = 0;
//     var row = 0;
//     var col = 0;
//     var index = 0;
//
//     for (var i = 0; i < sentence.length; i++){
//         if (sentence[i] > cols){
//             return 0
//         }
//     }
//
//     while(row != rows && col != cols) {
//         if (col + sentence[index].length <= cols){
//             col += sentence[index].length;
//
//             if (col >= cols - 1) {
//                 row++;
//                 col = 0
//             } else {
//                 col++;
//             }
//
//             if (index  === sentence.length - 1){
//                 count++;
//                 index = 0;
//             } else {
//                 index++;
//             }
//         } else {
//             row++;
//             col = 0;
//         }
//     }
//
//     return count
// };

// Optimized solution
// Status: In Progress

var wordsTyping = function(sentence, rows, cols){
    var complete = sentence.join(' ');
    var row = 0;
    var col = 0;
    var index = 0;

    while (row < rows) {
        if (cols < complete.length) {
            if (complete[cols] === ' ') {
                
            }
        } else if (cols > complete.length){
            return 'not yet implemented'
        } else {
            return rows
        }
    }
}

console.log(wordsTyping(["hello", "world"], 5,11));
// console.log(wordsTyping(["hello", "world"], 2,8));
// console.log(wordsTyping(["a", "bcd", "e"], 3,6));
// console.log(wordsTyping(["I", "had", "apple", "pie"], 4,5));