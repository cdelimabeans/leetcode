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

var mergeKListsWithHeap = function(lists) {
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

// Using Arrays
// Status: Accepted
// Runtime: 592ms
// Percentile Rank: 16.31%
var heapify = function(heap) {
    if (heap.length <= 1 ){
        return heap
    }

    var i = heap.length - 1

    while (i > 0) {
        var parent = Math.floor(i-1/2)

        if (heap[parent].val > heap[i].val) {
            var temp = heap[parent]
            heap[parent] = heap[i]
            heap[i] = temp

            i = parent
        } else if (heap[i] > heap[2*i + 2]){
            var temp = heap[2*i+2]
            heap[2*i+2] = heap[i]
            heap[i] = temp

        }
        else {
            return heap
        }
    }

    return heap
}
var mergeKListsWithArray = function(lists){
    var heap = []
    var result = []

    if (lists.length === 0) {
        return []
    }

    for (var k = 0; k < lists.length; k++){
        if (lists[k] != null){
            heap.push(lists[k])
            heapify(heap)
        }
    }

    while (heap.length > 0){
        var min = heap.shift()

        if (result.length > 0){
            result[result.length - 1].next = min
        }

        result.push(min)

        if (min.next != null){
            heap.push(min.next)
        }


        heapify(heap)

    }

    return result.length > 0 ? result[0] : []
}

// Using Divide and Conquer
// Status: Accepted
// Runtime: 88ms
// Percentile Rank: 91.13%
var merge2Lists = function(a, b){
    if (!a && !b){
        return null
    }
    if (!a && b){
        return b
    }

    if (!b && a){
        return a
    }

    var s
    var result = []

    while(a != null && b != null){

        if (a.val < b.val){
            s = a
            a = a.next
        } else {
            s = b
            b = b.next
        }

        if (result.length > 0 ){
            result[result.length -1].next = s
        }

        result.push(s)
    }

    if (a != null){
        s.next = a
    } else if (b != null){
        s.next = b
    }

    return result.shift()
}

var mergeKLists = function(lists){
    var newLists = []

    if (lists.length === 0){
        return lists
    } else if (lists.length === 1){
        return lists[0]
    } else {
        for (var i = 0; i < lists.length; i += 2){
            newLists.push(merge2Lists(lists[i], lists[i + 1]))
        }
    }

    return mergeKLists(newLists)
}


var ListNode = function(val){
    this.val = val
    this.next = null
}

function createListNode(list){
    if (list.length === 0) {
        return null
    }

    var root = new ListNode(list[0])
    var head = root

    for (var i = 1; i < list.length; i++){
        var node = new ListNode(list[i])
        root.next = node
        root = node
    }

    return head
}

function test(lists){
    var result = []
    for (var k = 0; k < lists.length; k++){
        result.push(createListNode(lists[k]))
    }

    return result
}

function print(node){
    var result = []

    while (node != null){
        result.push(node.val)
        node = node.next
    }

    return result
}

var lists = test([[1,4,5],[1,3,4],[2,6]])
console.log(print(mergeKLists(lists)), [1,1,2,3,4,4,5,6])
var lists = test([[]])
console.log(print(mergeKLists(lists)), [])
var lists = test([[],[]])
console.log(print(mergeKLists(lists)), [])
var lists = test([])
console.log(print(mergeKLists(lists)), [])
var lists = test([[1],[0]])
console.log(print(mergeKLists(lists)), [0,1])
var lists = test([[-8,-7,-7,-5,1,1,3,4],[-2],[-10,-10,-7,0,1,3],[2]])
console.log(print(mergeKLists(lists)), [-10,-10,-8,-7,-7,-7,-5,-2,0,1,1,1,2,3,3,4])
var lists = test([[-10,-9,-9,-3,-1,-1,0],[-5],[4],[-8],[],[-9,-6,-5,-4,-2,2,3],[-3,-3,-2,-1,0]])
console.log(print(mergeKLists(lists)), [-10,-9,-9,-9,-8,-6,-5,-5,-4,-3,-3,-3,-2,-2,-1,-1,-1,0,0,2,3,4])
var lists = test([[0,1,2],[-10,-8,-5,-4],[],[],[-3],[-10,-9,-6,-4,-3,-2,-2,-1,2],[-9,-9,-2,-1,0,1],[-9,-4,-3,-2,2,2,3,3,4]])
console.log(print(mergeKLists(lists)), [-10,-10,-9,-9,-9,-9,-8,-6,-5,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-1,-1,0,0,1,1,2,2,2,2,3,3,4])