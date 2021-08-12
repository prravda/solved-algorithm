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
 *
 * [ 오답노트 ]
 * - 조건을 명확하게 주지 않았다.
 * - if 조건문을 만족하지 않는 모든 경우가 아니라, 또 다른 조건을 만족하는 경우를 명시해주었어야 했는데,
 *   그러지 않다 보니 내가 생각한 대로 연산을 하지 못 했다.
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
    // 1개만 남은 경우 -> 그것을 finishedTask 에 넣어준다.
    if (printerPool.length === 1) {
      finishedTask.push(printerPool.shift());
    }

    // 2개 이상의 task 가 남았고,
    // printerPool[0] 의 우선순위보다 더 중요한 문서가 뒤에 있다면
    // -> 해당 task 는 맨 뒤로 미뤄준다
    if (
      printerPool.length > 1 &&
      printerPool
        .slice(1)
        .some((task) => task.priority > printerPool[0].priority)
    ) {
      printerPool.push(printerPool.shift());
    }

    // 2개 이상의 task 가 남았고,
    // printerPool[0] 의 우선순위보다 더 중요한 문서가 뒤에 없다면
    // -> 해당 task 를 .pop() 한 뒤, finishedTask 로 push() 해 준다
    if (
      printerPool.length > 1 &&
      !printerPool
        .slice(1)
        .some((task) => task.priority > printerPool[0].priority)
    ) {
      finishedTask.push(printerPool.shift());
    }
  }

  // finishedTask 를 순회한다.
  // 그리고, finishedTask 를 구성하는 element 의 order property 가 location 과 일치하는 경우
  // -> i 를 반환하고, 연산을 종료한다.
  for (let i = 0; i < finishedTask.length; i++) {
    if (finishedTask[i].order === location) {
      return i + 1;
    }
  }
}

solution([2, 1, 3, 2], 2);

describe('test code', () => {
  it('first case', () => {
    expect(solution([2, 1, 3, 2], 2)).toBe(1);
  });
});
