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

const visitedArr = targetGraph.map(arg => false);

// without recursion
const bfs = (graph, current, visited) => {
  const visitedNodeListWithOrder = [];
  // 가장 먼저 queue 로 사용할 동적 배열을 만들어주고 안에 current 를 넣어준다 
  const queueForVisited = [current];
  // 그 다음 현재 node 를 visited arr로부터 방문 처리한다
  visited[current] = true;
  // queue 가 빌 때까지 반복문을 실행한다
  while (queueForVisited.length > 0) {
    // queue 의 맨 앞에 있는 element 를 뺀 뒤, targetNode 라는 변수에 할당한다
    const targetNode = queueForVisited.shift();
    visitedNodeListWithOrder.push(targetNode);
    // 그리고 그 element 의 자식 node 들을 기준으로 iteration 을 한다 
    for (const childOfTargetNode of graph[targetNode]) {
      // childOfTargetNode 중 아직 방문하지 않은 것들에 한해서
      if (!visited[childOfTargetNode]) {
        // queue 에 해당 childOfTargetNode 를 넣어주고
        queueForVisited.push(childOfTargetNode);
        // 방문 처리를 해준다
        visited[childOfTargetNode] = true;
        // 사실 없어도 되는 logic 이지만, 방문한 순서를 확인하기 쉽게 하기 위해서
        // 배열을 또 하나 만들고 그 곳에 방문한 순서대로 node 들을 넣어준다
      }
    }
  }
  return visitedNodeListWithOrder;
};

bfs(targetGraph, 1, visitedArr);


