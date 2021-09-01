// constraints 분석
// - 배열(nums) 의 length 는 1 이상 10 이하
// - 각 element 들은 -10 이상 10 이하
// - 배열의 모든 element 들은 unique 하다 (no duplicate)

// 문제의 조건
// - 모든 powerset 을 구하라
//   - 단, 중복이 되는 경우는 없도록 하라 (ex. [1, 2] 와 [2, 1] 은 중복되는 경우로 처리됨)
const subsets = (nums: number[]): number[][] => {
  const theLengthOfNums = nums.length;
  const subsets: number[][] = [];
  const extractor = (
    numbers: number[],
    currentSet: number[],
    index: number
  ) => {
    // currentSet 을 subsets 에 push 해 주는 것으로 시작
    subsets.push(currentSet);
    for (let i = index; i < theLengthOfNums; i++) {
      extractor(numbers, [...currentSet, numbers[i]], i + 1);
    }
  };
  extractor(nums, [], 0);
  // 재귀 연산의 결과가 담긴 subsets 를 반환하면서 연산을 마무리한다.
  return subsets;
};
