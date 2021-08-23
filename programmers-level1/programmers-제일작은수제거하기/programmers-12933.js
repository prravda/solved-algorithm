const solution = (arr) => {
    const copiedArr = Array.from(arr);
    const sortedArr = copiedArr.sort((a, b) => a - b);
    const [smallest] = sortedArr;

    let isFiltered = false;
    const filteredArr = arr.filter((arg) => {
        if (arg === smallest && isFiltered === false) {
            isFiltered = true;
        }
        if (arg !== smallest) {
            return arg;
        }
    });

    if (filteredArr.length === 0) {
        return [-1];
    }
    return filteredArr;
};

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));