// depth first search with adjancency list(arr)

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

// 0번 node 가 없이 1번부터 시작하기 때문에, 해당 graph 는 9개의 element 를 가진다.

// breadth-first search 이므로, 가장 밑바닥부터 찍고 올라오는 게 아니라 해당 층위의 node 를 전부 탐색하고 내려가는 방식이다
// 그렇기 때문에 DFS 에서 stack 을 사용했던 것과는 다르게 queue 구조를 사용한다
// 책만 보고 일단은 나 스스로 구현을 시도해보자

const visitedArr = targetGraph.map(arg => false);
const queueForVisited = [];
const visitedNodeList = [];

const bfs = (graph, current, visited) => {
  // 방문처리가 제대로 안 되는듯 하다. 왜 그런걸까 생각해보자.
  visited[current] = true;
  visitedNodeList.push(current);
  queueForVisited.push(...graph[current].filter(arg => !visited[arg]));
  // 그 queue 가 다 빌때까지, queue.deque(arr.shift()) 한 값들로 또 재귀를 돌려줌
  while(queueForVisited.length > 0) {
    bfs(graph, queueForVisited.shift(), visited);
  }
};

bfs(targetGraph, 1, visitedArr);


