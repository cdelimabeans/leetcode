/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.window = [];
    this.sum  = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.window.length === this.size){
        this.sum = (this.sum - this.window[0])
        this.window.shift()
    }

    this.sum += val
    this.window.push(val)

    return this.sum / this.window.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */