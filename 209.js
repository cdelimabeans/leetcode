/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

// Status: Accepted
// Runtime: 56ms
// Runtime Percentile: 96.02%

var minSubArrayLen = function(s, nums) {
    var min = nums.length + 1
    var start = 0
    var end = 0
    var currentSum = 0

    while (end < nums.length) {
        while (currentSum < s && end < nums.length) {
            currentSum += nums[end]
            end++
        }

        while (currentSum >= s && start < end){
            if (end - start < min){
                min = end - start
            }

            currentSum -= nums[start]
            start++
        }
    }

    //edge cases
    if (min === nums.length + 1){
        return 0
    } else {
        return min
    }

};
