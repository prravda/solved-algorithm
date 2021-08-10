const solution = (arr, divisor) => {
    const sorted = arr.sort((a, b) => a - b);
    const divided = sorted.filter(arg => arg % divisor === 0);
    if (divided.length === 0) {
        return [-1];
    } else {
        return divided;
    }
};

console.log(solution([2, 36, 1, 3], 1));