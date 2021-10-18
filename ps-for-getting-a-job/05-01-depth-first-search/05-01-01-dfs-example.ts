// describe graph with adjacency list
const graph: number[][] = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

// node 는 index 를 기준으로 ascendent 순서대로 탐색한다
const depthFirstSearchFunction = (graph: number[][]) => {
  // index 를 기준으로 방문여부를 확인하기 위한 array 를 만들고, 일단은 전부 false 로 채워넣는다.
  const visitedNodes = new Array(graph.length).fill(false);
  // helper function 을 만들어준다.
  const search = (
    graph: number[][],
    currentIndex: number,
    visited: boolean[]
  ) => {
    // current index node 는 방문처리한다
    visited[currentIndex] = true;
    console.log(currentIndex);
    // graph 에서 현재 node 를 아직 방문하지 않았다면,
    for (const indexOfEachNode of graph[currentIndex]) {
      if (visited[indexOfEachNode] === false) {
        search(graph, indexOfEachNode, visited);
      }
    }
  };

  // start helper function
  search(graph, 1, visitedNodes);
};

// run function with graph information (graph as adjacency matrix)
depthFirstSearchFunction(graph);
