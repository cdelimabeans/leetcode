/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Status: Accepted
// Runtime: 480ms
// Runtime Percentile: 12.09%

var maxSubArrayLen = function(nums, k) {
    //it's like the min subarray sum problem but instead of shortening the left index, we continue adding to right index
    var left = 0
    var right = 0
    var sum = 0
    var max = 0

    while (left < nums.length){
        while (right < nums.length){
            sum += nums[right]
            right++
            if (sum === k){
                max = Math.max(max, right-left)
            }

        }
        left++
        sum = 0
        right = left

    }

    return max
};