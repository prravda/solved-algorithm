# Seach - DFS, BFS and Recursion

---

# 소개

Search, 즉 검색 알고리즘은, 많은 양의 데이터로부터 원하는 데이터를 찾는 과정을 의미한다. 탐색 알고리즘 중 대표적인 알고리즘으로는 DFS / BFS (Depth first, Breadth first) 가 있고, 이 알고리즘을 이해하려면 알고리즘 이전에 스택과 큐, 그리고 재귀함수를 잘 알고 능숙하게 활용할 줄 알아야 한다. 

# Stack, Queue and Recursion

## 공통사항

스택과 큐는 공통적으로 삽입(`push`), 그리고 삭제(`pop`) 메서드를 가진다. 그리고 이 메서드를 구현할 때는, overflow(자료구조에 할당된 크기가 다 찬 상태에서 push 연산을 수행하는 경우), 그리고 underflow(자료구조에 들어있는 값이 아무것도 없는데 pop 연산을 수행하는 경우) 를 고려해야 한다.

## Stack

![Stack example - dishes](https://www.bonami.com/wp-content/uploads/2018/02/DishScuff_SelectsWEB.jpg)

### First-In Last-out

뷔페에 쌓여있는 접시를 생각하면 된다. 가장 먼저 쌓인 접시는 가장 밑으로 가고, 가장 나중에 꺼내진다. 가장 먼저 들어간 것이 가장 나중에 나오는 형태의 자료구조를 의미한다.  

자바스크립트에서 배열로 이 stack 구조를 구현한다면 array, (JS 의 array 는 가변배열이지만, 고정배열로 만들고자 배열의 크기를 정한다면 `new Array(size)` 로 만들 수 있을 듯 하다) 그리고 push 와 pop 메서드는 Array 메서드에 이미 다 구현이 되어있는 걸 활용하면 된다. 

## Queue

![Queue example - waiting line](https://cphoto.asiae.co.kr/listimglink/6/2020010710054082960_1578359141.jpg)

### First-In First-Out

이번엔 인기많은 식당에 줄을 선 대기열을 생각하면 된다. 간단하다. 먼저 들어온 사람이 먼저 밥을 먹는다. 

자바스크립트에서 이 Queue 도 배열(array)로 구현할 수 있다. 배열에 element 를 추가할 때는 stack 과 마찬가지로 `push` 를 사용하지만, element 를 뺄 때는 앞에서 부터 빼야 하므로 `shift` 메서드를 활용한다. 

## Recursion

```jsx
const recursiveFunction = () => {
	console.log(`it is recursive fucntion`);
	recursiveFunction();
};

recursiveFunction();
```

한국어로는 재귀, 함수와 같이 많이 쓰이는 개념으로, 위의 코드처럼 자기 자신을 호출하는 함수를 재귀함수라고 의미한다. 물론 JS 의 call stack 에 처리해야 할 함수들이 너무 많이 쌓여 할당된 크기의 call stack 을 초과한다면 `RangeError: Maximum call stack size exceeded (Chrome)` 라는 메시지를 볼 수 있다. 

### call stack (호출 스택)

[호출 스택](https://developer.mozilla.org/ko/docs/Glossary/Call_stack)

자바스크립트 코드가 실행되고, 그 코드 안의 어떤 함수가 호출되었을 때 

- 현재 어떤 함수가 동작하고 있는지
- 그 함수 내부에서는 어떤 함수가 동작하고 있는지
- 다음에는 어떤 함수가 호출되어야 하는지

를 제어하는 stack 이다. 

가령, 스크립트 코드가 실행되면서 어떤 함수가 호출되면, 그 함수는 call stack 으로 들어가게 된다. 그리고 call stack 은 해당 함수를 수행하고 함수의 수행이 끝나면 다시 메인 스크립트 코드로 넘어가 코드를 다시 실행한다. 

## stack 과 recursion

위의 call stack 에 대해서 적은 내용처럼, 함수는 call **stack** 에 쌓인다. 즉, stack 구조라는 이야기이다. 이 말은 stack 구조를 사용해서 풀어야 하는 알고리즘은 재귀를 사용해서 풀어낼 수 있단 의미이기도 하다.

### factorial with recursion

```jsx
const factorialWithRecursion = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * factorialWithRecursion(n-1);
}
```

재귀를 연습하기 위해 간단한 팩토리얼을 한 번 작성해보자. `factorialWithRecursion` 이라는 함수는 그 안에서 자기 자신을 또 호출하는데, parameter 로 넘겨주는 값은 1씩 줄어든다. 그리고 매번 반환(return)을 할 때마다 parameter 를 return 한다. 즉, n, n-1, n-2... 순서대로 return 하는 것이다. 그러다가, n이 1 이하인 경우에는 1을 return 한다. 

```jsx
const factorialWithLoop = (n) => {
  let returnValue = 1;
  for (let i = 1; i <= n; i++) {
    returnValue = returnValue * i;
  }
  return returnValue;
}
```

같은 기능을 하는 함수를 반복문으로 구현하면 이런 식으로 구현할 수 있다. 결과는 위의 재귀함수와 같다. 

### why & when we have to use recursion?

그렇다면 반복문으로 대체할 수 있는 코드이고, 재귀를 함으로써 call stack 에 값이 계속 쌓이는데, 굳이 재귀를 사용하는 이유는 무엇인가? 언제 재귀를 사용해야 하는가? 

먼저, 코드를 간결하게 짤 수 있다. 그리고 우리가 일상 생활에서(?) 사용하는 점화식과 그 꼴이 비슷하다. 학창 시절 배웠던 점화식을 생각해보자

$$a_{n} = n * a_{n-1} $$

익숙하지 않은가? 특정한 함수를 표현할 때, 자신보다 더 작은 변수의 함수와의 관계로 표현한 이 점화식과 재귀함수는 많이 닮아있다. 즉, 재귀함수는 함수를 점화식꼴로 표현하는 느낌이라고 생각하면 된다.

범위 또한 마찬가지이다. 점화식이 한도끝도 없이 이어지면 안 되기에 점화식의 유효 범위를 획정해 주듯, 재귀함수에서도 범위를 획정해준다. "n이 1 이상인 경우" 등의 조건식을 활용해서. 

⚠️ **이 재귀라는 개념은 이 Search algorithm 뿐만 아니라, Dynamic Programming 으로 이어지기 때문에 충분히 숙지하고 있는 것이 중요하다.**