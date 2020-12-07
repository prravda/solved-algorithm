const solution = (n) => {

    // 제곱근을 구해준다 
    const sqrtN = Math.sqrt(n);

    // 제곱근까지의 소수목록을 구한다 
    const primeToSqrtN = [];
    for (let i = 2; i < sqrtN; i ++) {
        // i = 2일경우 push 하고 다음 i로 넘어감
        if (primeToSqrtN.length === 0) {
            primeToSqrtN.push(i);
            continue;
        }

        // 그 다음, i가 primeToSqrtN 안의 prime 들로 나눈 나머지가 '전부' 0이 아니라면
        // 그 값을 primeToSqrtN 에 push 해준다
        if (primeToSqrtN.every(prime => i % prime !== 0)) {
            primeToSqrtN.push(i);
            continue;
        }
        // 두 개의 조건문에도 전부 선택받지 못했다면... pass
    }

    // 이제는 제곱근까지의 소수목록들로 나눠떨어지는 수들을 전부 없애준다
    const primeToN = [];
    for (let i = 2; i <= n; i++) {
        // 2 이상 n 이하의 모든 수들 중, 모든 소수들로 나눈 각각의 나머지가 전부 0인 경우를 찾는다
        // Array.prototype.every 메서드는 전부 다 통과해야 true 가 나오기 떄문에 도중 하나라도 통과하지 못하면 false 를 return 한다
        if (primeToSqrtN.every(prime => i % prime !== 0)) {
            // 그렇기 때문에 그냥 primeToN.push(i); 로 마무리한다. 
            primeToN.push(i);
        }
        // 저 윗 조건이 false 여서 여기까지 넘어온다면, 그냥 다음 수로 넘어간다 
        continue;
    }

    return primeToSqrtN.length + primeToN.length;

    // console.log(`${n} 의 제곱근 ${Math.sqrt(n)} 까지의 소수는`)
    // console.log(primeToSqrtN);
    // console.log(`입니다`);
    // console.log(`그리고 위의 소수들을 제외한 ${n}까지의 모든 소수는`)
    // console.log(`${primeToN} 이며`);
    // console.log(`이 둘을 합치면`) 
    // console.log(`${[...primeToSqrtN, ...primeToN].sort((a, b) => a - b)}`);
    // console.log(`입니다`);
};

console.log(solution(10));