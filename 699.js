/**
 * @param {number[][]} positions
 * @return {number[]}
 */

// Status: Accepted
// Runtime: 272 ms
// Runtime Percentile: unknown

var fallingSquares = function(positions) {
    var ans = []
    //coordinate compression
    var set = {}
    positions.forEach(function(pos){
        set[pos[0]] = 0
        set[(pos[0]+pos[1] -1)] = 0
    })
    var coords = Object.keys(set).sort(function(a, b) {
        return a - b;
    })

    var index = {}
    var t=0
    coords.forEach(function(coord){
        index[coord] = t++
    })

    var tree = new SegmentTree(coords.length);
    var max = 0


    positions.forEach(function(pos) {
        var left = index[pos[0]]
        var right = index[pos[0] + pos[1]-1]
        var h = tree.query([left, right]) + pos[1]
        max = Math.max(max,tree.update(h, [left, right]))
        ans.push(max)
    })

    return ans

};

function SegmentTree(n) {
    this.tree = initTree(new Array(n))

    //methods
    this.getVal = function () {return this.tree.val}
    this.query = queryST
    this.update = updateST

}

function initTree(arr){
    var root = new Node(0, 0, arr.length -1)
    return initTreeHelper(arr, 0, arr.length -1, root)
}

function initTreeHelper(arr, start, end, root){
    if (start === end) {
        root.val = arr[start] || 0
        return root
    } else {
        var mid = Math.floor((start + end)/2)
        var left = new Node(0, start, mid)
        var right = new Node(0, mid+1, end)
        root.left = initTreeHelper(arr, start, mid, left)
        root.right = initTreeHelper(arr, mid+1, end, right)

        root.val = Math.max(root.left.val, root.right.val)
        return root
    }
}

function queryST (pos, node){
    const start = pos[0]
    const end = pos[1]
    node = node || this.tree

    //check if node is up to date
    if (node.lazyPropVal > 0){
        node.val = node.lazyPropVal

        if (node.left != null){
            node.left.val = node.lazyPropVal
            node.left.lazyPropVal = node.lazyPropVal
        }
        if (node.right != null){
            node.right.val = node.lazyPropVal
            node.right.lazyPropVal = node.lazyPropVal
        }
        node.lazyPropVal = 0
    }

    //if total overlap
    if (start === node.pos[0] && end === node.pos[1]){
        return node.getVal()
    }
    //if no overlap
    else if ((start < node.pos[0] && node.pos[0] > end) || (start > node.pos[1] && node.pos[1] < end)){
        return 0
    }
    //if partial overlap
    else {
        if (!node.left && !node.right){
            return node.getVal()
            return x
        } else {
            node.val =  Math.max(queryST(pos, node.left), queryST(pos, node.right))
            return node.val
        }
    }
}

function updateST(val, pos, node){
    const start = pos[0]
    const end = pos[1]
    node = node || this.tree

    //if total overlap
    if (start === node.pos[0] && end === node.pos[1]){
        if (node.left != null){
            node.left.val = val
            node.left.lazyPropVal = val
        }
        if (node.right != null){
            node.right.val = val
            node.right.lazyPropVal = val
        }

        return node.val = val
    }
    //if no overlap
    else if ((start < node.pos[0] && node.pos[0] > end) || (start > node.pos[1] && node.pos[1] < end)){
        return 0
    }
    //if partial overlap
    else {
        if (node.left === null && node.right === null){
            return node.update(val)
        } else {
            node.val = Math.max(
                updateST(val, pos, node.left),
                updateST(val, pos, node.right)
            )

            if (node.lazyPropVal > 0){
                node.val += node.lazyPropVal
                node.lazyPropVal = 0
            }

            return node.val
        }
    }
}

function Node(val, start, end) {
    this.val = val
    this.pos = [start, end]
    this.left = null
    this.right = null
    this.lazyPropVal = 0

    //methods

    this.update = function (x) {
        this.val = x

        if (this.left){
            this.left.val = x
            this.left.lazyPropVal = x
        }

        if (this.right){
            this.right.val = x
            this.left.lazyPropVal = x
        }

        return this.val
    }

    this.getVal = function(){
        return this.val
    }
}
