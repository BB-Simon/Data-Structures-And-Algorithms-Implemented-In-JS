// Graphs => Breadth-first-search

const BFS = (graph, root) => {
  let nodeeLen = {};
  for (let i = 0; i < graph.length; i++) {
    nodeeLen[i] = Infinity;
  }
  nodeeLen[root] = 0;
  let queue = [root];
  let current;

  while (queue.length != 0) {
    current = queue.shift();
    let currentConnected = graph[current];
    let neighborIndex = [];
    let index = currentConnected.indexOf(1);
    while (index != -1) {
      neighborIndex.push(index);
      index = currentConnected.indexOf(1, index + 1);
    }
    for (let j = 0; j < neighborIndex.length; j++) {
      if (nodeeLen[neighborIndex[j]] == Infinity) {
        nodeeLen[neighborIndex[j]] = nodeeLen[current] + 1;
        queue.push(neighborIndex[j]);
      }
    }
  }
  return nodeeLen;
};

let exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(BFS(exBFSGraph, 1));
