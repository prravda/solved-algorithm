/*
해결방법
조합할 수 있는 모든 수를 구한다
- 순서를 고려하고 뽑는 것이므로, 순열을 사용한다
    - 그러나, 순서를 고려하되 0이 앞에 오면 안되는 등 상황이 있으므로 추가 조건을 걸어준다
그 중 소수만을 찾는다
*/
const solution = (numbers) => {

    const allCases = [];

    const calcPermutation = (arrOfArgs, numberToPick) => {
        const results = [];
      
        const backTracker = (args, tempArr) => {
          if (tempArr.length === numberToPick) {
            const resultFromIndex = tempArr.map(eachIdx => args[eachIdx]).join('');
            if (!results.includes(resultFromIndex)) {
              results.push(resultFromIndex);
            }
          }
      
          args.forEach((arg, idx) => {
            if (!tempArr.includes(idx)) {
              tempArr.push(idx);
              backTracker(args, tempArr);
              tempArr.pop();
            }
          });
        }
        
        backTracker(arrOfArgs, []);
        return results;
    }

    for (let i = 1; i <= numbers.length; i++) {
        allCases.push(...calcPermutation([...numbers], i));
    }

    const primeBaseCase = [2, 3, 5, 7]
    const primes = [];
    for (const eachNum of allCases) {
        // 0이거나 1이면 생략
        if (eachNum[0] === '0' || eachNum === '1') {
            continue;
        }
        // 만약 
        if (primeBaseCase.includes(Number(eachNum))) {
            primes.push(eachNum);
            continue;
        }
        
        if (primeBaseCase.some(prime => Number(eachNum) % prime === 0)) {
            continue;
        }

        primes.push(eachNum);
    }
    
    console.log(allCases);
    console.log(primes);

    return primes.length;
}

solution('5604034');