/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
    if (grid.length === 0){
        return 0
    }

    var rows = grid.length;
    var cols = grid[0].length;
    var r = 0;
    var c = 0;
    var max = 0;

    var check = function(path, row, col) {
        var count = 0;

        while((row >= 0 && row < rows) && (col >= 0 && col < cols)){
            if (grid[row][col] === 'W') {
                return count;
            } else if (grid[row][col] === 'E') {
                count++
            }

            row += path[0]
            col += path[1]
        }
        return count;
    }

    while(r < rows) {
        while(c < cols){
            if (grid[r][c] === "0"){
                var n = r > 0 ? check([-1, 0], r-1, c) : 0;
                var s = r < rows -1 ? check([1,0], r+1,c) : 0;
                var e = c < cols -1 ? check([0,1], r, c+1) : 0;
                var w = c > 0 ? check([0,-1], r, c-1): 0;
                if (n+e+w+s > max){
                    max = n+e+w+s
                }
            }
            c++
        }
        c = 0
        r++
    }

    return max
};

var test = [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]

console.log(maxKilledEnemies(test));