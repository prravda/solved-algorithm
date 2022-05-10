const solution = (number, k) => {
    let numToArr = [...number];
    let removableElement = k;

    let tempIndex = 0;
    let fixedIndex = 0;
    let tempMax = Number(numToArr[0]);
    while (removableElement > 0) {
        const currentIndex = tempIndex + fixedIndex;
        if (Number(numToArr[currentIndex] > tempMax)) {
            numToArr.splice(fixedIndex, (tempIndex));
            continue;
        }
        if (Number(numToArr[currentIndex]) <= tempMax) {
            tempIndex ++;
            continue;
        }
    }
    return numToArr.join('');
};

// 머리를 써야한다... 뭔가 가로막힌 느낌이고 막막하고 진전이 없지만 문제를 나누어 쪼개 내가 해결할 수 있는 작은 크기의 문제로 만들어야 한다. 



// console.log(solution("1924", 2));
// console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
// console.log(solution("1742532", 5));
// console.log(solution("127589154", 5));
// console.log(solution("87659", 3));