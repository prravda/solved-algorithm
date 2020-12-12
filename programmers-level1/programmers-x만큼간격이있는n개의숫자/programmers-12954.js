const solution = (x, n) => {
    const container = [];
    for (let i = 1; i <= n; i++) {
        container.push(x * i);
    }
    return container;
};

console.log(solution(2, 5));
console.log(solution(-4, 2));
