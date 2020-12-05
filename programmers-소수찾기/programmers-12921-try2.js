const solution = (n) => {
    const primes = [];

    // n <= 100
    if (n <= 100) {
        for (let i = 2; i <= n; i++) {
            if (i !== 2 && i % 2 === 0) {
                continue;
            }
            if (i !== 3 && i % 3 === 0) {
                continue;
            }
            if (i !== 5 && i % 5 === 0) {
                continue;
            }
            if (i !== 7 && i % 7 === 0) {
                continue;
            }
            primes.push(i);
        }
        return primes;
    }

    // n > 100
    for (let i = 2; i <= n; i++) {
        // n > 100 && i <= 100
        if (i <= 100) {
            if (i !== 2 && i % 2 === 0) {
                continue;
            }
            if (i !== 3 && i % 3 === 0) {
                continue;
            }
            if (i !== 5 && i % 5 === 0) {
                continue;
            }
            if (i !== 7 && i % 7 === 0) {
                continue;
            }
            primes.push(i);
            continue;
        }

        // n > 100 && i > 100
        if (i > 100) {
            const roundedHalf = Math.round(i/2);
            for (const [inex, eachPrime] of primes.entries()) {
                if (i % eachPrime === 0) {
                    break;
                }
                if (primes[inex+1] > roundedHalf && i % eachPrime !== 0) {
                    primes.push(i);
                    break;
                }
            }
        }
    }

    return primes;

};

console.log(solution(151));