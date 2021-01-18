// 내장 sort method 를 이용해서 푼다면?
const solution = (citations) => {
  const sortedCits = [...citations.sort((a, b) => b - a)];
  const removeDuplicate = new Set([...sortedCits]);
  const filteredCits = [...removeDuplicate];

  let idxToReturn = 0;

  // edge case 조금 더 고려해보기
  
  for (let i = 0; i < filteredCits.length - 1; i++) {
    let startCit = filteredCits[i];
    let endCit = filteredCits[i + 1];
    let isFound = false;
    const idxOfPaper = sortedCits.lastIndexOf(startCit);

    while (startCit > endCit) {
      if (idxOfPaper !== -1 && idxOfPaper + 1 >= startCit) {
        idxToReturn = idxOfPaper + 1;
        isFound = true;
        break;
      }
      startCit --;
    }

    if (isFound) {
      return idxToReturn;
    }

  }
};

// test case 모음: https://programmers.co.kr/questions/13499
// console.log(solution([12, 11, 10, 9, 8, 1]));
// console.log(solution([4, 4, 4])); // 3
// console.log(solution([4, 4, 4, 5, 0, 1, 2, 3])); 
// console.log(solution([6, 6, 6, 6, 6, 1])); // 5
// console.log(solution([10, 11, 12, 13] === 4));
// console.log(solution([3, 0, 6, 1, 5] === 3));
// console.log(solution([0, 0, 1, 1] === 1));
// console.log(solution([0, 1])); // 1
console.log(solution([10, 9, 4, 1, 1])); // 3

// console.log(solution([12, 11, 10, 9, 8, 1]));
// console.log(solution([3, 0, 6, 1, 5]));