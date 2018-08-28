/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var perimeter = 0;
    var x = 0;
    var y = 0;

    var check = function(cell){
        return cell === 1 ? -1 : 0
    }

    for (var x = 0; x < grid.length; x++){
        for (var y = 0 ; y < grid[0].length; y++){
            if (grid[x][y] === 1){
                perimeter += 4
                //check north
                perimeter += x > 0 ? check(grid[x-1][y]) : 0;
                //check south
                perimeter += x < grid.length - 1 ? check(grid[x+1][y]) :0;
                //check west
                perimeter += y > 0 ? check(grid[x][y-1]) : 0;
                //check east
                perimeter += y < grid[0].length ? check(grid[x][y-1]) : 0;
            }
        }
    }

    return perimeter
};

var test = [[0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]]

console.log(islandPerimeter(test));