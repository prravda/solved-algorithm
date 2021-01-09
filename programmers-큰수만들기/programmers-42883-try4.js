const solution = (number, k) => {
    let numToArr = [...number];
    let removableCount = k;
    
    let tempIndex = 0;
    let fixedIndex = 0;
    while (removableCount > 0) {
        if (tempIndex >= numToArr.length) {
            fixedIndex ++;
            tempIndex = 0;
            continue;
        }
        const currentIndex = fixedIndex + tempIndex;
        if (Number(numToArr[currentIndex]) < Number(numToArr[currentIndex + 1])) {
            numToArr.splice(currentIndex, 1);
            tempIndex = 0;
            removableCount --;
            continue;
        }
        tempIndex ++;
    }
    return numToArr.join('');
};

// 머리를 써야한다... 뭔가 가로막힌 느낌이고 막막하고 진전이 없지만 문제를 나누어 쪼개 내가 해결할 수 있는 작은 크기의 문제로 만들어야 한다. 
// 배열을 통해 계산하는 게 효율성을 저해하는 게 아닌가 해서 배열 대신 문자열 그 자체를 사용했는데, 마찬가지로 통과하지 못 한다. 배열-문자열의 처리방식 문제가 아닌 듯 하다. 
// 한 바퀴를 다 돌았을 때 다음 단계로 넘어가는 코드를 넣어줬으나 그게 문제가 아닌 듯 하다, 더 줄일 수 있는 방법이 필요하다.



console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
// console.log(solution("417252841", 4));
// console.log(solution("1742532", 5));
// console.log(solution("127589154", 5));
// console.log(solution("87659", 3));