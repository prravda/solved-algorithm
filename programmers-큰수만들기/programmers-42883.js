const solution = (number, k) => {
    const sortedNumberArr = [...number].map(arg => Number(arg)).sort((a, b) => b - a);
    const slicedSortedArr = sortedNumberArr.slice(0, sortedNumberArr.length - k);
    return slicedSortedArr.join('');
};

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));