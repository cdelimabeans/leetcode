/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution from a year ago
// Status: Accepted
// Runtime: 338ms
// Runtime Percentile: 7.54%
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++){
        for (x = i+1; x < nums.length; x++){
            if (nums[x] == target - nums[i]){
                return [i, x]
                break
            }
        }
    }
};

// New solution, applying new knowledge about algorithms and data structures
// Status: Accepted
// Runtime: 52ms
// Runtime Percentile: 99.98%
var twoSum = function(nums, target) {
    if (nums.length === 0) { return -1}
    var complements = {}

    for (var i = 0; i < nums.length; i++){
        if (complements[target - nums[i]] > -1){
            return [complements[target - nums[i]], i]
        } else {
            complements[nums[i]] = i
        }
    }

    return -1
}

var test = twoSum([2,7,11,15], 9)
console.log(test, JSON.stringify(test) === "[0,1]")