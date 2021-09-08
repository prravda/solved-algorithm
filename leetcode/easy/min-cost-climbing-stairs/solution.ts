// [문제 설명]
// - https://leetcode.com/problems/min-cost-climbing-stairs/
// - 계단이 있고, 각 계단을 오르는 데 필요한 비용이 담긴 cost 라는 배열이 있다. (cost: number[])
// - 계단은 한 번에 1개 혹은 2개를 오를 수 있다
//    - 시작을 할 때도 마찬가지로, 1개(0번째 계단을 밟는걸로 시작) 혹은 2개(1번째 계단을 밟는걸로 시작) 중에서 선택할 수 있다.
// - 정상까지 도달하는데 가장 적게 드는 선택지를 골라라
// [조건 분석]
// - 계단의 갯수는 2개 이상 1,000개 이하이다.
// [문제 분석]
// - 연산은 O(n^2) 까지 사용이 가능하다
//   - 1000^2 은 1,000,000, ^3 을 하게되면 10억이 되어 TLE 확정.
// - 완전탐색을 하는 경우엔 2^(array.length - 2) 라는 time complextiy 를 가진다 -> TLE 확정
//     - 그리디 문제일 확률이 높다고 생각한다.
// - 그런데, 일반적으로 바로 앞의 2개의 element 라는 단위로 나눈 [각 시행] 마다 [최적의 선택] 을 반복해도 결과적인 최적의 해를 구할 수 없다.
// - 어떤 법칙을 추론할 수 있을까?
//   - [3, 4, 5] 가 있다면 4를 골라야 한다.
//   - [3, 4, 5, 3, 4, 5] 가 있다면 3, 4,
//   - [3, 10, 10] 이 있다면 10 을 골라야 한다.
//   - [10, 15, 20] 이 있다면 15를 골라야 한다.
// - 단순하게 현 시점에서 1개를 밟는 경우와 2개를 밟는 경우를 비교해보면? -> 도출할 수 없다.
// - 해결의 실마리를 찾은 거 같다. 배열의 맨 뒤부터 역으로 밟아나가면 된다.

const minCostClimbingStairs = (cost: number[]): number => {
  const lengthOfCost = cost.length;
  const climber = (
    costArr: number[],
    currentIndex: number,
    accumulatedCost: number
  ): number => {
    // - costArr[currentIndex] 와 costArr[currentIndex - 1] 을 비교한다.
    //   - 만약 costArr 를 index 로 접근했을 때 undefined 가 반환된다면, 해당 값은 0으로 대체한다.
    //   - 두 값을 비교했을 때, 더 작은 쪽으로 currentIndex 를 이동하면서 움직인다.
    //     - ⚠️ 그런데 만약 두 값이 같은 경우엔 어떻게 해야할까?
    return accumulatedCost;
  };
};
