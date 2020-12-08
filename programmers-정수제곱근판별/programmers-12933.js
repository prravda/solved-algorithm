const solution = (n) => {
    if (Math.sqrt(n) % 1 === 0) {
        return Math.pow((Math.sqrt(n) + 1), 2);
    } return -1;
};

console.log(solution(987));