// 재귀함수 + dfs 방식으로 접근한다.
// 각각을 + 혹은 - 로 경우의 수를 만들어 Node Tree 를 만들고
// 맨 밑까지 내려갔을 때 target number 와 값이 같으면 ++ 를 해준 뒤
// target number 와 일치하는 경우의 수를 반환한다.

// time complexity 는 2^n 이다.
// +, - 경우의 수를 numbers 배열의 길이만큼 시행하면 각각 2가지씩 해서 2^n 가지의 경우가 나온다.

const solution = (numbers, target) => {
  // targetNumber case 를 담기위한 변수
  let targetNumberCase = 0;
  // depth first search 를 수행해주는 함수
  const depthFirstSearch = (depth, accm) => {
    // 만약 배열의 길이, 즉 dfs 의 최대 depth 만큼 탐색을 하여 탐색이 종료된 경우
    if (depth === numbers.length) {
      // target number case 와 같은지 확인하고
      if (accm === target) {
        // target number case 와 합의 결과가 같은 경우 target number case ++
        targetNumberCase++;
      }
      // 그렇지 않다면, 연산을 종료한다.
      return;
    }
    // depth 를 늘려나가면서 + 와 - 로 탐색하는 과정을 재귀함수로 호출해준다.
    depthFirstSearch(depth + 1, accm + numbers[depth]);
    depthFirstSearch(depth + 1, accm - numbers[depth]);
  };
  // 탐색을 시작하는 함수를 시작하고,
  depthFirstSearch(0, 0);
  // 연산이 종료된 경우엔 targetNumberCase 를 반환한다.
  return targetNumberCase;
};

console.log(solution([1, 1, 1, 1, 1], 3));
