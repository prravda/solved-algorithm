const solution = (n) => {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (i === 2 || i === 3 || i === 5 || i === 7) {
            primes.push(i);
            continue;
        }
        if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            continue;
        } 
        if (primes.every(arg => i % arg !== 0)) {
            primes.push(i);
        }
    }
    return primes.length;
};

console.log(solution(200));