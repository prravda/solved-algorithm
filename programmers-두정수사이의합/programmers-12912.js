const solution = (a, b) => {
    const bigger = Math.max(a, b);
    const smaller = Math.min(a, b);
    let accm = 0;
    for (let i = smaller; i <= bigger; i++) {
        accm = accm + i;
    }
    return accm;
};

console.log(solution(3, 3));