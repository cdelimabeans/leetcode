/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v2
 */
var ZigzagIterator = function ZigzagIterator(...args) {
    this.currentIndex = 0
    this.args = args

    this.remainingArr = []
    this.indeces = []

    for (var i = 0; i < args.length; i++){
        if (args[i].length > 0){
            this.remainingArr.push(args[i])
            this.indeces.push(0)
        }
    }
};

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */

ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.remainingArr.length > 0
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    if (this.remainingArr.length > 0){
        var result
        let x = this.currentIndex

        while(typeof result === "undefined"){
            let y = this.indeces[x]
            result = this.remainingArr[x][y]

            if (y+1 == this.remainingArr[x].length) {
                //remove array from remaining arrays and remove index from indeces
                this.remainingArr.splice(x, 1)
                this.indeces.splice(x,1)
            } else {
                this.indeces[x]++
            }
        }

        this.currentIndex = this.currentIndex >= this.remainingArr.length - 1 ? 0 : x + 1

        return result
    }
};

// var v1 = [0]
// var v2 = [0]

var v1 = [1,2]
var v2 = [3,4,5]

var i = new ZigzagIterator(v1, v2), a = [];
while (i.hasNext()) a.push(i.next());

console.log(a)
/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

