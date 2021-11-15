# Graph - BFS

# Definition

Breadth-First, 그러니까 너비 우선 탐색이다.

## How it works?

- root 노드 방문처리 및 큐에 삽입
- 큐가 빌 때까지, 큐에 삽입된 노드들의 인접노드들을 큐에 삽입

```tsx
// 방문여부를 확인하는 배열
// node 들의 갯수만큼 false 를 만들어주고, 방문처리 할 시엔
// 해당배열[index] = true 로 처리해주는데 사용한다
const visitedChecker = new Array(node 들의 갯수).fill(false);

// psuedo code
function bfs(graph, current, visited) {
	// 탐색값 저장을 위한 큐
	const queue = [];
	// 큐에 노드를 집어넣는다
	queue.push(current);
	// 해당 노드는 방문 처리한다.
	visited[current] = true;

	// queue 의 길이가 0이 될 때까지
	// 어떤 노드를 큐에서 빼고, 그 노드의 인접 노드들을 넣는 과정을 반복한다.
	while(queue.length === 0) {
		// queue 에서 마지막 노드를 빼 주는 과정
		const lastInsertedNode = queue.shift();
		// queue 에서 빠진 마지막 노드들의 인접 노드들을 가져오는 과정
		const adjacencyNodes = graph[lastInsertedNode];
		// 인접 노드들을 queue 에 집어넣는 과정
		for (const eachNode of adjacencyNodes) {
			// 만약 인접 노드 중, 방문하지 않은 노드가 있다면
			if (visited[eachNode] === false) {
				// 큐에 넣어준 뒤
				queue.push(eachNode);
				// 방문 처리를 해 준다
				visited[eachNode] = true;
			}
		}
}
```

---

11/16 오늘은 프로그래머스에서 문제를 풀어보면서 DFS/BFS 부분을 공부하자. 최소 1문제.
