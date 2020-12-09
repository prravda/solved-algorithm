const solution = (num) => {
    if (num%2 === 0) {
        return 'Even';
    }
    return 'Odd';
};

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));