/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Status: Accepted
// Runtime: 116ms
// Percentile Rank: 83.49%

function ListNode(val) {
     this.val = val;
     this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var output = [];
    var carry = 0;

    while(l1 != null || l2 != null){
        var sum = (l1 ? l1.val : null) + (l2 ? l2.val : null) + carry
        carry = Math.floor(sum / 10)

        if (sum > 9) {
            sum = sum % 10
        }

        output.push(sum);

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (carry){
        output.push(carry)
    }
    return output;
};

// var l1 = new ListNode(2);
// var n1 = new ListNode(4);
// l1.next = n1;
// var n2 = new ListNode(3);
// n1.next = n2;
//
// var l2 = new ListNode(5);
// var n3 = new ListNode(6);
// l2.next = n3;
// var n4 = new ListNode(4);
// n3.next = n4;

var l1 = new ListNode(1);
var n1 = new ListNode(8);
l1.next = n1;

var l2 = new ListNode(0);

console.log(addTwoNumbers(l1, l2))
