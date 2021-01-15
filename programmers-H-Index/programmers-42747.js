// 내장 sort method 를 이용해서 푼다면?
const solution = (citations) => {
  const sortedCitations = [...citations.sort((a, b) => b - a)];
  for (const cit of sortedCitations) {
    if (sortedCitations.lastIndexOf(cit) + 1 >= cit) {
      return cit;
    }
  }
};

// test case 모음: https://programmers.co.kr/questions/13499
// console.log(solution([12, 11, 10, 9, 8, 1] === 5));
// console.log(solution([4, 4, 4] === 3));
// console.log(solution([4, 4, 4, 5, 0, 1, 2, 3] === 3));
// console.log(solution([6, 6, 6, 6, 6, 1] === 5));
// console.log(solution([10, 11, 12, 13] === 4));
// console.log(solution([3, 0, 6, 1, 5] === 3));
// console.log(solution([0, 0, 1, 1] === 1));
// console.log(solution([0, 1] === 1));
// console.log(solution([10, 9, 4, 1, 1] === 3));

console.log(solution([12, 11, 10, 9, 8, 1]));