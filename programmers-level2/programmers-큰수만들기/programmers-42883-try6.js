const solution = (number, k) => {
    const lengthOfOriginNumber = number.length;
    let numToArr = [...number].map(arg => Number(arg));
    let removable = k;
    
    let counter = 0;
    while (removable > 0) {
        const targetArr = numToArr.slice(counter, removable + counter + 1);
        if (targetArr.length === 0) {
            return numToArr.slice(0, (lengthOfOriginNumber - k));
        }
        let maxValue = 0;
        for (let i = 0; i < targetArr.length; i++) {
            if (i === 0) {
                maxValue = targetArr[i];
                continue;
            }
            if (targetArr[i] > maxValue) {
                if (targetArr[i] >= targetArr[i + 1] || targetArr[i + 1] === undefined) {
                    numToArr = [...numToArr.slice(0, counter), ...numToArr.slice(i + counter)];
                    removable = removable - i;
                    break;
                }
                maxValue = targetArr[i];
                continue;
            }
        }
        counter ++;
    }
   return numToArr.join('');
};

// console.log(solution("4177252841", 4));
// console.log(solution("1924", 2));
// console.log(solution("1231234", 3));
// console.log(solution("10100", 3));
console.log(solution("54321", 3));
// console.log(solution("222222", 4));
// console.log(solution("1", 0));
// console.log(solution("54321", 3));
// console.log(solution("4177252841", 4));
// console.log(solution("1742532", 5));
// console.log(solution("127589154", 5));
// console.log(solution("87659", 3));