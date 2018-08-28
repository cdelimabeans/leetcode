// Status: Accepted
// Runtime: 52ms
// Percentile Rank: 88.51%

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    var max = 0;
    var currLevel = 0;
    var path = [];

    if (!input || input.length == 0){
        return 0
    }

    var str = input.split("\n");

    str.forEach(function(el){
        let lvl = 0;
        if (el){
            if (el.startsWith("\t")) {
                var newEl = el.split(/(\t+)/);
                newEl.shift();
                lvl = newEl[0].length

                el = newEl[1]
            } else if (el.startsWith("    ")){
                var newEl = el.split(/( +)/);
                newEl.shift();
                lvl = Math.floor(newEl[0].length / 4)

                //can't be tabbed more than logical next level
                if (lvl > currLevel + 1){
                    el = `${newEl[0].slice(0,(currLevel + 1) * 4)}${newEl[1]}`
                } else {
                    el = newEl[1]
                }
            }

            if (lvl <= currLevel){
                if (lvl === 0){
                    path = []
                } else {
                    path = path.slice(0, lvl)
                }
            }

            path.push(el)

            if (el.indexOf('.') > -1){
                max = Math.max(max, `${path.length > 0 ? path.join('/') : ''}`.length)
                path.pop()
            } else {
                currLevel = lvl
            }
        }
    })

    return max
};

console.log(lengthLongestPath("dir\n\t        file.txt\n\tfile2.txt")) //20
console.log(lengthLongestPath("a.txt")); //5
console.log(lengthLongestPath("a\n\taa\n\t\taaa\n\t\t\tfile1.txt\naaaaaaaaaaaaaaaaaaaaa\n\tsth.png")); //29
console.log(lengthLongestPath("dir\n        file.txt")); //16
console.log(lengthLongestPath("dir\n\t    file.txt")); //16
console.log(lengthLongestPath("dir \n\t   subdir1\n\tsubdir2\n\t\t file.ext")); //22
console.log(lengthLongestPath("a\n\tb\n\t\tc.txt\n\taaaa.txt")) //10
console.log(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext\n\taaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); //32