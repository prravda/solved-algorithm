const solution = (arr) => {
    return arr.reduce((accm, curr) => {
        return accm + curr;
    }, 0)/arr.length;
};

console.log(solution([1, 2, 3, 4]));