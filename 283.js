/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Status: Accepted
// Runtime: 68ms
// Runtime Percentile: 54.95%

var moveZeroes = function(nums) {
    var start = 0

    for (var i = 0; i < nums.length; i++){
        if (nums[i] != 0){
            var temp = nums[start]
            nums[start] = nums[i]
            nums[i] = temp
            start++
        }
    }
};