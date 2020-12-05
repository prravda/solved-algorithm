const solution = (n) => {
    let decmCounter = 0;
    for (let i = 2; i <= n; i++) {
        if (i === 2) {
            decmCounter++;
        }
        const roundHalf = Math.round(i/2);
        for (let j = 2; j <= roundHalf; j++) {
            if (i % j === 0) {
                break;
            } 
            if (j === roundHalf) {
                decmCounter++;
                return;
            }
        }
    }
    return decmCounter;
};

console.log(solution(5));

/**
 * 소수의 정의란? 1과 자신만으로 나눠지는 수
 * I: n
 * O: 1에서 n까지의 수 중 소수인 수를 담은 배열
 * 2까지라면? 2
 * 3까지라면? 2, 3
 * 4까지라면? 2, 3
 * 5까지라면? 2, 3, 5
 * 6까지라면? 2, 3, 5
 * 7까지라면? 2, 3, 5, 7
 * 8까지라면? 2, 3, 5, 7
 * 9까지라면? 2, 3, 5, 7
 * 10까지라면? 2, 3, 5, 7
 * 11까지라면? 2, 3, 5, 7, 11
 */

 /*
특정 수: k
for (let i = 2; i < k; i++) {
    if (k % i === 0) {
        return;
    } return k;
}

2는 소수인가?
- 2까지의 숫자: 1, 2
- 모든 경우가 나머지가 0이 아님

3은 소수인가?
- 3까지의 숫자: 1, 2, 3
- 2(1)
- 모든 경우가 나머지가 0이 아님

4는 소수인가?
- 4까지의 숫자: 2, 3
- 2(0), 3(1)

5는 소수인가?
- 5까지의 숫자: 2, 3, 4
- 2(1), 3(2), 4(1)
- 모든 경우가 나머지가 0이 아님

6은 소수인가?
- 6까지의 숫자: 2, 3, 4, 5
- 2(0), 3(0), 4(2), 5(1)

7은 소수인가?
- 7까지의 숫자: 2, 3, 4, 5, 6
- 2(1), 3(2), 4(3), 5(2), 6(1)

8은 소수인가?
- 2(0), 3(2), 4(0), 5(3), 6(2), 7(1)

9는 소수인가?
- 2(1), 3(0), 4(1), 5(4), 6(3), 7(2), 8(1)

결국, 본인을 2로 나눈 수가 나머지가 0인 경우 그 수를 기준으로
혹은, 본인을 2로 나눈 수가 나머지가 0이 아닌 경우 그 수를 반올림한 수를 기준으로

그 수까지만 비교하면 된다
*/

/*
이전의 내 로직
const solution = (n) => {
    const sqrtOfN = [...Array(Math.floor(Math.sqrt(n))).keys()].slice(2);
    const numberList = [...Array(n).keys(), n].slice(2);
    const primes = [];
    numberList.filter(number => {
        if (sqrtOfN.every(compare => number % compare !== 0)) {
            return true;
        } 
        return false;
    });
    return primes.length;
};
*/