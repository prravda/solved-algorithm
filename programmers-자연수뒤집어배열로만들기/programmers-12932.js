const solution = (n) => {
    return String(n).split('').reverse().map(arg => Number(arg));
};

console.log(solution(987));