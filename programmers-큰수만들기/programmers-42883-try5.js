const solution = (number, k) => {
    const lengthOfNumber = number.length;
    let numToArr = [...number].map(arg => Number(arg));
    let removable = k;

    const tempStack = [];
    while (removable > 0) {
        if (tempStack.length >= lengthOfNumber - k) {
            return tempStack.join('');
        }

        const targetArr = numToArr.slice(0, removable + 1);
        const maxValue = Math.max(...targetArr);
        const maxValueIndex = numToArr.indexOf(maxValue);

        tempStack.push(maxValue);
        numToArr = numToArr.slice(maxValueIndex + 1);
        removable = removable - maxValueIndex;
    }
    return `${tempStack.join('')}${numToArr.join('')}`;
};

// console.log(solution("4177252841", 4));
// console.log(solution("1924", 2));
// console.log(solution("1231234", 3));
// console.log(solution("10100", 3));
// console.log(solution("54321", 3));
// console.log(solution("222222", 4));
// console.log(solution("1", 0));
// console.log(solution("54321", 3));
// console.log(solution("4177252841", 4));
// console.log(solution("1742532", 5));
// console.log(solution("127589154", 5));
// console.log(solution("87659", 3));