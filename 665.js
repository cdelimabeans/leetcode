/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Status: Accepted
// Runtime: 64ms
// Runtime Percentile: 100%

var checkPossibility = function(nums) {
    let p = null

    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i+1]) {
            if (p != null){
                return false
            } else {
                p = i
            }
        }
    }

    if ((p === null) || (p === 0) || (p == nums.length - 2) || (nums[p-1] <= nums[p+1]) || (nums[p] <= nums[p+2])) {
        return true
    } else {
        return false
    }
};

var test = checkPossibility([4,2,3]);
console.log(test, test === true);
var test = checkPossibility([4,2,1]);
console.log(test, test === false);