const solution = (n) => {
    let sumOfDivs = 0;
    if (n === 0) {
        return sumOfDivs;
    }
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            if (i > n/i) {
                break;
            }
            if (i === n/i) {
                sumOfDivs = sumOfDivs + i;
                break;
            }
            sumOfDivs = sumOfDivs + i + (n/i);
        }
    }
    return sumOfDivs;
};

console.log(solution(36));