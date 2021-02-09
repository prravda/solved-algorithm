// depth first search without class

// with adjancency matrix
// store each node and vertex relation
// 번호가 낮은 순서대로 처리하는 게 일반적이다

// adjancency matrix 방식으로 나타낸 graph 
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

// 방문 여부를 나타내는 배열인 visited, 초기값은 node 의 갯수만큼 false 를 만들어주는 것으로 하자
let visitedArr = targetGraph.map(arg => false);
// graph: node - vertex 간의 관계를 담은 adjancency matrix
// currentNode: 방문 여부를 나타내는 property
// visited: 방문한 node 들을 저장하는 stack
const dfs = (graph, currentNode, visited) => {
  // 1. visited stack 안에 있는 현재 노드를 방문 처리한다.
  // 처음에는 currentNode 에 1을 주고 탐색을 시작할 것이다.
  visited[currentNode] = true;
  console.log(currentNode);
  // 2. 이 graph 를 표현하는 방식은 adjancency matrix 이므로 
  // graph[currentNode][anotherNode] 를 통해 currentNode 와 anotherNode 의 연결 여부를 알 수 있다.
  // 그리고 curretNode 가 연결된 또 다른 node 들의 경우 작은 순서대로 진행할 예정이다.
  for(const connectedNode of graph[currentNode]) {
    // 만약 visited stack 에서 connectedNode 의 방문이력이 없다면
    if(visited[connectedNode] === false) {
      // 재귀를 통해 같은 graph, 그러나 시발점은 currentNode 로 다시 탐색을 시작해준다
      dfs(graph, connectedNode, visited);
    }
  }
};

// 처음 node 부터 실행해준다
dfs(targetGraph, 1, visitedArr);