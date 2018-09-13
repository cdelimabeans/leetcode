/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */


// Status: Accepted
// Runtime: 80ms
// Runtime Percentile: 84.19%

var minMeetingRooms = function(intervals) {
    //first sort by end time
    if (intervals.length === 0){
        return 0
    }

    var starts = []
    var ends = []
    var rooms = 0
    var end = 0

    intervals.forEach(function(i){
        starts.push(i.start)
        ends.push(i.end)
    })

    starts.sort(function(a, b){
        return a-b
    })
    ends.sort(function(a,b){
        return a-b
    })

    for (var start = 0; start < starts.length; start++){
        if (starts[start] < ends[end]){
            rooms++
        } else{
            end++
        }
    }

    return rooms
};
