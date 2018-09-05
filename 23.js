/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// With Implementing MinHeap Data Structure
// Status: Accepted
// Runtime: 204ms
// Percentile Rank: 45.75%

var MinHeap = function(arr){
    var heapify = function(arr) {
        var i = arr.length - 1

        if (i <= 0) { return arr }

        while (i > 0){
            var parent = Math.floor(i-1/2)

            // if parent is bigger than i
            if (arr[parent].val > arr[i].val){
                var temp = arr[parent]

                arr[parent] = arr[i]
                arr[i] = temp

                i = parent
            } else {
                return arr
            }
        }

        return arr
    }

    this.heap = arr.length > 0 ? heapify(arr) : arr

    this.getMin = function(){
        const min = this.heap.shift()
        this.heap = heapify(this.heap)
        return min
    }

    this.insert = function(n){
        this.heap.push(n)
        this.heap = heapify(this.heap)

        return this.heap
    }

    this.isEmpty = function(){
        return this.heap.length === 0
    }
}

var mergeKLists = function(lists) {
    if (lists.length <= 0) {
        return []
    }

    var heap = new MinHeap([])
    var result = []

    for (var k = 0; k < lists.length; k++){
        if (lists[k] != null) {
            heap.insert(lists[k])
        }
    }

    while (!heap.isEmpty()){
        var min = heap.getMin()

        if (min.next != null){
            heap.insert(min.next)
        }

        if (result.length > 0){
            result[result.length - 1].next = min
        }

        result.push(min)
    }

    return result ? result[0] : []
};

var lists = test([[1,4,5],[1,3,4],[2,6]])
console.log(print(mergeKLists(lists)))
var lists = test([[]])
console.log(print(mergeKLists(lists)))
var lists = test([[],[]])
console.log(print(mergeKLists(lists)))
var lists = test([[1],[0]])
console.log(print(mergeKLists(lists)))
var lists = test([[-8,-7,-7,-5,1,1,3,4],[-2],[-10,-10,-7,0,1,3],[2]])
console.log(print(mergeKLists(lists)))
var lists = test([[-10,-9,-9,-3,-1,-1,0],[-5],[4],[-8],[],[-9,-6,-5,-4,-2,2,3],[-3,-3,-2,-1,0]])
console.log(print(mergeKLists(lists)))