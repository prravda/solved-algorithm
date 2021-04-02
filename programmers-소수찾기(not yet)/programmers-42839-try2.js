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
            // index 기준으로 조합해서 하나의 문자열로 만들어줌
            /*
            [좀 더 풀어보기]
                1. 0이 앞자리에 없을때까지 0을 지워주는 과정이 필요
                2. 그렇게 지운 수가 results 에 존재하는지 확인 후, 존재하지 않는 경우만 넣어줌
            */
            const resultFromIndex = tempArr.map(eachIdx => args[eachIdx]);

            while(resultFromIndex[0] === '0') {
                resultFromIndex.shift();
            }
            const refinedStr = resultFromIndex.join('');
            

            if (!results.includes(refinedStr)) {
              results.push(refinedStr);
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
        const permute = calcPermutation([...numbers], i);
        // console.log(permute);
        allCases.push(...permute);
    }

    const primeBaseCase = [2, 3, 5, 7]
    const primes = [];
    for (const eachNum of allCases) {
        // 1이면 생략
        if (eachNum === '1') {
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

    // console.log(allCases);
    // console.log('--------------------');
    // console.log([...new Set(primes)]);

    return [...new Set(primes)].length;
}

solution('0101');