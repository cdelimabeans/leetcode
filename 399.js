/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */


var calcQuery = function (graph,dividend, divisor){
    if (graph.hasNode(dividend) && graph.hasNode(divisor) && graph.hasPath(dividend, divisor)){
        if (dividend === divisor) return 1.0

        var path = graph.getPath(dividend, divisor)
        var total = 1.0

        var prev = path[0].key

        for (var p = 1; p < path.length; p++){
            var current = path[p].key
            total = total * graph.getEdge(prev, current)
            prev = current
        }

        return total
    }

    return -1.0
}

var Node = function (key) {
    this.key = key
    this.neighbors = {}
}

var Graph = function() {
    this.vertices = {}
    this.edges = {}
}

Graph.prototype.addVertex = function(node){
    this.vertices[node.key] = node
}

Graph.prototype.addEdge = function(a,b, weight){
    this.edges[`${a},${b}`] = weight

    if (this.vertices[a] && this.vertices[b]){
        this.vertices[a].neighbors[b] = weight
    }
}

Graph.prototype.hasNode = function(node){
    return this.vertices[node]
}

Graph.prototype.getEdge = function(a, b){
    return this.edges[`${a},${b}`]
}

Graph.prototype.hasPath = function(a,b){
    if (a === b) return true

    var nodeA = this.vertices[a]
    var nodeB = this.vertices[b]

    if (nodeA && nodeB) {
        //BFS
        var queue = [nodeA]
        var visited = {}

        while (queue.length > 0) {
            var current = queue.shift()
            visited[current.key] = true
            var neighbors = Object.keys(current.neighbors)
            for (var i = 0; i < neighbors.length; i++) {
                if (neighbors[i] === b) {
                    return true
                }
                if (!visited[neighbors[i]]){
                    queue.push(this.vertices[neighbors[i]])
                }
            }
        }
    }

    return false
}

Graph.prototype.getPath = function(a, b){
    if (a === b) return -1.0

    var nodeA = this.vertices[a]
    var nodeB = this.vertices[b]


    if (nodeA && nodeB){
        //BFS
        var queue = [[nodeA]]
        var tempPath = []
        var visited = {}

        while (queue.length > 0) {

            tempPath = queue.shift()

            var last = tempPath[tempPath.length -1]

            visited[last.key] = true

            if (last.key === b){
                return tempPath
            }

            var neighbors = Object.keys(last.neighbors)

            for (var i = 0; i < neighbors.length; i++) {
                if (!visited[neighbors[i]]){
                    queue.push(tempPath.concat(this.vertices[neighbors[i]]))
                }
            }
        }

    } else {
        return -1.0
    }
}

var calcEquation = function(equations, values, queries) {
    //create graph of equations where A and B are nodes and k is the edge
    // A->B = k and B->A = 1/k
    // output = all edges in path between nodes should be multiplied
    var output = []
    var graph = new Graph()

    //create graph using equations
    for (var i = 0; i < equations.length; i++){
        var dividend = equations[i][0]
        var divisor = equations[i][1]

        //initialize nodes if they don't exist
        if (!graph.hasNode(dividend)){
            graph.addVertex(new Node(dividend))
        }

        if (!graph.hasNode(divisor)){
            graph.addVertex(new Node(divisor))
        }

        //create edge
        graph.addEdge(dividend, divisor, values[i])
        graph.addEdge(divisor, dividend, 1/(values[i]))
    }

    //calculate queries
    for (var q = 0; q < queries.length; q++){
        var dividend = queries[q][0]
        var divisor = queries[q][1]

        output.push(calcQuery(graph, dividend, divisor))
    }

    return output
};

var equations = [["a", "b"], ["b", "c"]],
    values = [2.0, 3.0],
    queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]],
    expected = [6.0, 0.5, -1.0, 1.0, -1.0 ];

var test = calcEquation(equations,values,queries);
console.log(test,expected, JSON.stringify(expected) === JSON.stringify(test) ? "PASSED" : "FAILED")

var equations = [["a", "b"], ["c", "d"]],
    values = [1.0, 1.0],
    queries = [["a", "c"], ["b", "d"], ["b", "a"], ["d", "c"]],
    expected = [-1, -1, 1, 1];

var test = calcEquation(equations,values,queries);
console.log(test,expected, JSON.stringify(expected) === JSON.stringify(test) ? "PASSED" : "FAILED")

