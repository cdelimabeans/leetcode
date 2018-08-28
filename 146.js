// Status: In Progress
// Runtime:
// Percentile Rank: 

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.full = false
    this.cache = {}
    this.stack  = new Set([])

    this.evict = function(){
        delete this.cache[this.stack[0]]
        this.stack.delete()
    }
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    var result = this.cache[key]

    if (result){
        this.stack.add(key)

        return result
    } else {
        return -1
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function(key, value) {
    if (this.full && this.stack.has(key)) {
        this.evict()
    }

    this.stack.add(key)
    this.cache[key] = value

    this.full = Object.keys(this.cache).length === this.capacity

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // returns 1
cache.put(3, 3);    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));      // returns 3
console.log(cache.get(4));       // returns 4
console.log('=======')
var cache2 = new LRUCache(2);
console.log(cache2.get(2)); //-1
cache2.put(2, 6)
console.log(cache2.get(1)); //-1
cache2.put(1,5);
cache2.put(1,2);
console.log(cache2.get(1)); //2
console.log(cache2.get(2)); //6


var set = new Set([1,2])
console.log(set.add(1))
console.log(set.keys().next().value)