// Status: Accepted
// Runtime: 88ms
// Percentile Rank: 44.19%

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var longestConsecutive = function(root){
    return recurse(root)[0] || 0
}

var recurse = function(root, maxPath = []) {
    if (root === null){
        return maxPath
    }

    if (maxPath.length === 0) {
        maxPath.push(root.val)
    } else {
        if (root.val === maxPath[maxPath.length -1] + 1){
            maxPath.push(root.val)
        }
    }

    var left = 0
    var right = 0

    if (root.left){
        if (root.left.val === root.val + 1){
            left = recurse(root.left, maxPath)
        } else {
            left = recurse(root.left, [])
        }
    }

    if (root.right){
        if (root.right.val === root.val + 1){
            right = recurse(root.right, maxPath)
        } else {
            right = recurse(root.right, [])
        }
    }

    if (left.length > right.length){
        if (left.length > maxPath.length){
            return left
        } else if (maxPath.length > left.length){
            return maxPath
        } else {
            if (maxPath[0] > left[0]){
                return maxPath
            } else {
                return left
            }
        }
    } else {
        if (right.length > maxPath.length){
            return right
        } else if (maxPath.length > right.length){
            return maxPath
        } else {
            if (maxPath[0] > right[0]){
                return maxPath
            } else {
                return right
            }
        }
    }

};

// var tree = new TreeNode(1);
// var n2 = new TreeNode(3);
// var n3 = new TreeNode(2);
// var n4 = new TreeNode(4);
// var n5 = new TreeNode(5);
//
// n4.right = n5;
// n2.right = n4;
// n2.left = n3;
// tree.right = n2;

// var tree = new TreeNode(2);
// var n1 = new TreeNode(3);
// var n2 = new TreeNode(2);
// var n3 = new TreeNode(1);
//
// tree.right = n1;
// n1.left = n2;
// n2.left = n3;

var tree = new TreeNode(1);
var n1 = new TreeNode(2);

console.log(longestConsecutive(tree));
