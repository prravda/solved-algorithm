const solution = (n) => {
    return Number(String(n).split('').sort((a, b) => b - a).join(''));
};

console.log(solution(987));