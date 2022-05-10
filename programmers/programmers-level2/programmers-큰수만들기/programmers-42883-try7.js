const solution = (number, k) => {
    const numToArr = [...number].map(arg => Number(arg));
    const lengthOfOriginNumber = numToArr.length;
    let removable = k;
    
    const stackToReturn = [];
    while (removable > 0) {
        if (stackToReturn.length >= lengthOfOriginNumber - k) {
            return stackToReturn.join('');
        }
        // 초기값 설정
        const tempStack = [numToArr[0]];
        numToArr.shift();
        // 역대 최댓값보다 크거나 같은 경우 -> tempStack 에 넣어준다
        if (numToArr[0] >= tempStack[tempStack.length - 1]) {
            tempStack.push(numToArr.shift());
        } else {
            // 그렇지 않은 경우엔 지워준다 그 수를 지워준다
            removable --;
            numToArr.shift();
        }
        // 해당 연산이 끝난 후, 역대 최댓값을 담은 tempStack 에서 역대 최댓값을 갱신한다
        while (tempStack[0] < tempStack[1]) {
            tempStack.shift();
            removable --;
        }
        stackToReturn.push(...tempStack);
        while (stackToReturn[0] < stackToReturn[1]) {
            stackToReturn.shift();
            removable --;
        }
    }
    return `${stackToReturn.join('')}${numToArr.join('')}`;
};

// console.log(solution("4177252841", 4));
// console.log(solution("1924", 2));
// console.log(solution("1231234", 3));
// console.log(solution("10100", 3));
// console.log(solution("54321", 3));
// console.log(solution("222222", 4));
// console.log(solution("1", 0));
console.log(solution("54321", 3));
// console.log(solution("4177252841", 4));
// console.log(solution("1742532", 5));
// console.log(solution("127589154", 5));
// console.log(solution("87659", 3));