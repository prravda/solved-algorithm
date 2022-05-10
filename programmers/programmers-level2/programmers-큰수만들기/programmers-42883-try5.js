const solution = (number, k) => {
    let numToArr = [...number].map(arg => Number(arg));
    const lengthOfOriginNumber = numToArr.length;
    let removable = k;
    
    const maxValArr = [];
    while (removable > 0) {
        if (maxValArr.length >= lengthOfOriginNumber - k) {
            return maxValArr.join('');
        }
        let isNotChanged = true;
        let tempMaxIndex = 0;
        let tempMax = 0;
        for (let i = 0; i <= removable; i++) {
            if (i === 0) {
                tempMax = numToArr[i];
                continue;
            }
            if (numToArr[i] > tempMax) {
                if (numToArr[i] >= numToArr[i+1] || numToArr[i+1] === undefined) {
                    isNotChanged = !isNotChanged;
                    maxValArr.push(...numToArr.splice(i, 1));
                    numToArr = numToArr.slice(i);
                    removable = removable - i;
                    break;
                }
                tempMax = numToArr[i];
                tempMaxIndex = i;
                continue;
            }
            
        }
        if (isNotChanged) {
            maxValArr.push(...numToArr.splice(tempMaxIndex, 1));
            numToArr = numToArr.slice(tempMaxIndex);
            removable = removable - tempMaxIndex;
        }
    }
    return `${maxValArr.join('')}${numToArr.join('')}`;
};

// console.log(solution("4177252841", 4));
// console.log(solution("1924", 2));
// console.log(solution("1231234", 3));
// console.log(solution("10100", 3));
// console.log(solution("54321", 3));
// console.log(solution("222222", 4));
console.log(solution("1", 0));
// console.log(solution("54321", 3));
// console.log(solution("4177252841", 4));
// console.log(solution("1742532", 5));
// console.log(solution("127589154", 5));
// console.log(solution("87659", 3));