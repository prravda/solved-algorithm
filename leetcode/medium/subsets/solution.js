// constraints 분석
// - 배열(nums) 의 length 는 1 이상 10 이하
// - 각 element 들은 -10 이상 10 이하
// - 배열의 모든 element 들은 unique 하다 (no duplicate)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 문제의 조건
// - 모든 powerset 을 구하라
//   - 단, 중복이 되는 경우는 없도록 하라 (ex. [1, 2] 와 [2, 1] 은 중복되는 경우로 처리됨)
var subsets = function (nums) {
    var theLengthOfNums = nums.length;
    var subsets = [];
    var extractor = function (numbers, currentSet, index) {
        // currentSet 을 subsets 에 push 해 주는 것으로 시작
        subsets.push(currentSet);
        for (var i = index; i < theLengthOfNums; i++) {
            extractor(numbers, __spreadArray(__spreadArray([], currentSet, true), [numbers[i]], false), i + 1);
        }
    };
    extractor(nums, [], 0);
    // 재귀 연산의 결과가 담긴 subsets 를 반환하면서 연산을 마무리한다.
    return subsets;
};
