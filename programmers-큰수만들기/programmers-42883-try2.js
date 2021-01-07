const solution = (number, k) => {
    const copiedNumberArr = [...number].map(arg => Number(arg));
    const sortedNumber = [...copiedNumberArr].sort((a, b) => b - a);
    
    let biggestNumIndex = 0;
    for (const num of sortedNumber) {
        if (copiedNumberArr.indexOf(num) <= k) {
            biggestNumIndex = copiedNumberArr.indexOf(num);
            break;
        }
    }

    
    let tempIndex = 0;
    let removableNumberCounter = k - biggestNumIndex;
    const arrStartFromBiggest = copiedNumberArr.slice(biggestNumIndex);

    while (removableNumberCounter > 0 && tempIndex < arrStartFromBiggest.length) {
        if (arrStartFromBiggest[tempIndex] < arrStartFromBiggest[tempIndex + 1]) {
            arrStartFromBiggest.splice(tempIndex, 1);
            removableNumberCounter --;
            tempIndex ++;
            continue;
        }
        if (arrStartFromBiggest[tempIndex] >= arrStartFromBiggest[tempIndex + 1]) {
            tempIndex ++;
            continue;
        }
    }

    return arrStartFromBiggest.join('');
};

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
