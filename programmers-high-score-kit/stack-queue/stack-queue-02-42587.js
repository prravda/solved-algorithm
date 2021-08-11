// 문제명: 프린터
// 주소: https://programmers.co.kr/learn/courses/30/lessons/42587

/**
 * [ 문제 파악 ]
 * 대기목록의 0번째 문서를 꺼낸다 (이하 J)
 * 나머지 대기목록 중, J의 우선순위보다 높은 문서가 1개라도 존재한다면 J는 맨 뒤로 보낸다
 * 없다면, J를 인쇄한다.
 *
 * 라는 로직으로,
 * 내가 인쇄를 요청한 문서가 몇 번째로 인쇄 되는지 알려주는 함수를 구현해보세요
 *
 * 예시
 * [1, 1, 9, 1, 1, 1] 에서 0번째 문서가 언제 인쇄 되는지 알고싶을 때
 *
 * [ 시간복잡도 파악 ]
 * arr.length <= 100
 * O(n^3) 해도 괜찮으니 일단 풀어보자
 *
 * [ 문제 해결전략 ]
 * 1. arr.map((arg, index) => return { { order: index, priority: arg }}) 을 통해, 문서의 순번과 우선도를 분리해준다.
 * 2. 해당 mutation 이 일어난 array 를 printerPool 이라는 arr 변수에 할당한다.
 * 2-1. 그리고, finished 라는 array 를 선언하고, 빈 배열로 초기화 해준다.
 * 2-2. 해당 finished 라는 배열은, 완료된 작업물을 담기 위함이다.
 * 3. printerPool 중에서 0번째의 priority 보다 더 우선순위인 작업물이 있는지를 찾는다.
 * 3-1. 없다면, printerPool.shift() 를 통해 맨 앞의 작업물을 printerPool 에서 제거한다.
 * 3-1-1. 그 제거한 값을 finished 라는 배열에 넣는다.
 * 3-2. 있다면, printerPool.shift() 를 통해 맨 앞의 작업물을 printerPool 에서 제거한다.
 * 3-2-1. 그 제거한 값을 printerPool.push 를 통해, 맨 뒤에 넣는다.
 * 4. printerPool 의 length 가 0이 될 때까지 해당 과정을 반복한다.
 * 5. finished 에서 input 으로 들어왔던 location 값이, finished 의 element property 중 order 값인 경우를 찾는다.
 * 6. 해당 element 의 index 를 반환한다.
 */

function solution(priorities, location) {
  const printerPool = [...priorities].map((arg, index) => {
    return {
      order: index,
      priority: arg,
    };
  });
  const finishedTask = [];

  while (printerPool.length > 0) {
    if (
      printerPool.some(
        (eachTask) => eachTask.priority > printerPool[0].priority
      )
    ) {
      const taskToRemoved = printerPool.shift();
      printerPool.push(taskToRemoved);
    }
    finishedTask.push(printerPool.shift());
  }

  for (let i = 0; i < finishedTask.length; i++) {
    if (finishedTask[i].order === location) {
      return i;
    }
  }
}

const result1 = solution([1, 1, 9, 1, 1, 1], 0);
console.log(result1);
