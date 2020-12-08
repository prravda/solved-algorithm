const solution = (n) => {
    return String(n).split('').reduce((accm, curr) => {
        return accm + Number(curr);
    }, 0);
};

console.log(solution(987));