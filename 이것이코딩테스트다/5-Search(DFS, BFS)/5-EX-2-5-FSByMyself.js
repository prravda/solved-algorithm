// bfs, dfs 를 스스로 다시 구현해보는 공간
// adjancency list type 으로 graph 를 표현해준다
const targetGraph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7]
];

/*
의사코드 작성
1. 가장 밑의 노드를 가장 먼저 순회 -> 선입후출 -> stack 사용
2. 맨 아래까지 일단은 타고 내려감
3. 자식 노드가 더 이상 없으면 위로 올라가서 sibling node 중 방문하지 않은 것들을 방문함 
*/
const stackForDFS = [];
const visitedChecker = [];
const visitedForDFS = targetGraph.map(arg => false);

const dfsWithRecursion = (graph, current, visited) => {
  visited[current] = true;
  console.log(current);
  for (const childNode of graph[current]) {
    if (visited[childNode] === false) {
      dfs(graph, childNode, visited);
    }
  }
};

console.log(dfsWithRecursion(targetGraph, 1, visitedForDFS));