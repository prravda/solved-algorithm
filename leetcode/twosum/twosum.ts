/**
 * [ 문제 설명 ]
 * 숫자로 된 배열 nums 와 숫자 target 이 주어진다.
 * 해당 배열의 element 들을 조합해, target 을 만드는 index 를 찾는다.
 * 같은 element 를 반복해서는 안 되고(index 가 같은), 답이 되는 경우는 단 하나만 존재한다고 가정한다.
 * 
 * [ 조건 ]
 * 숫자의 갯수는 2개부터 10^4개, 즉 10000 개 까지 존재할 수 있다
 * 각 숫자의 크기와 target 은 -10^9 부터 10^9 까지 가능하다
 * 
 * [ 복잡도 계산 ]
 * 10,000개 이기 때문에 n^2 이 나오면 1억번의 연산이 이뤄져야 함
 * -> 그렇기에 적어도 nlogn 의 해결책을 찾아야 한다.
 */

const twoSum = (nums: number[], target:number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    let indexAfterCurrent = i + 1;
    while (nums[i] + nums[indexAfterCurrent] !== target) {
      indexAfterCurrent ++;
    }
    if (nums[i] + nums[indexAfterCurrent] === target) {
      return [i, indexAfterCurrent];
    }
  }
}

console.log(twoSum([3,2,4], 6));