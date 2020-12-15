const solution = (numbers) => {
    const splittedString = numbers.split('');

    // 가장 큰 수까지의 소수를 구하고, 그 소수가 indexOf 중 하나라도 포함하면 return 하면된다
    // 문제를 잘못 이해했다... 이렇게 하면 1 혹은 7을 포함한 모든 수를 return 해서 1과 7, 그리고 그 조합을 포함한 숫자만 구하는 과정을 결국 또 거쳐야 한다! 다시풀자
    const splittedNumber = splittedString.map(arg => Number(arg));
    const maxCombinationCase = Number(splittedNumber.sort((a, b) => b - a).join(''));

    const primesTillMaxCase = [];
    const primesTillMaxCaseSqrt = [];

    const sqrtOfMaxCase = Math.sqrt(maxCombinationCase);
    for (let i = 2; i < sqrtOfMaxCase; i++) {
        if (primesTillMaxCaseSqrt.length === 0) {
            primesTillMaxCaseSqrt.push(i);
            continue;  
        }
        if (primesTillMaxCaseSqrt.every(prime => i % prime !== 0)) {
            primesTillMaxCaseSqrt.push(i);
            continue;
        }
    }
    for (let i = 2; i <= maxCombinationCase; i++) {
        if (primesTillMaxCaseSqrt.every(prime => i % prime !== 0)) {
            primesTillMaxCase.push(i);
        }
    }

    const primesList = [...primesTillMaxCase, ...primesTillMaxCaseSqrt];

    console.log(primesList);

    const primeFitWithCondition = primesList.map(prime => {
        if (splittedString.some(digit => String(prime).indexOf(digit) !== -1)) {
            return prime;
        }
    });

    console.log(primesList);
    console.log(primeFitWithCondition);
};

solution('17');