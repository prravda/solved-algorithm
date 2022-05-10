class FindPrimeFromPermutation {

  calcPermutation(numbers, amount) {
    const results = [];
    const numToArr = [...numbers];

    const aux = (target, tempArr) => {
      if (tempArr.length === amount) {
        const numStringFromIdx = tempArr.map(eachIdx => target[eachIdx]).join('');
        results.push(this.removeZeroTillNotZero(numStringFromIdx));
      }
      for (let i = 0; i < target.length; i++) {
        if (!tempArr.includes(i)) {
          tempArr.push(i);
          aux(target, tempArr);
          tempArr.pop();
        }
      }
    }
    aux(numToArr, []);

    return results;
  }

  removeZeroTillNotZero(numString) {
    let targetString = numString;
    while (targetString[0] === '0') {
      targetString = targetString.slice(1);
    }
    return Number(targetString);
  } 

  calcPermutationTill(numbers) {
    const results = [];
    for (let i = 1; i <= numbers.length; i++) {
      results.push(...this.calcPermutation(numbers, i));
    } 
    return [...new Set(results)];
  }

  findPrimes(numbers) {
    const primes = [];
    const primeBaseCase = [2, 3, 5, 7];
    
    for (const eachNum of numbers) {
      if (eachNum === 0 || eachNum === 1) {
        continue;
      }
      // 2, 3, 5, 7 이 존재하는 경우
      if (primeBaseCase.includes(eachNum)) {
        primes.push(eachNum);
        continue;
      }
      // 1과 자기 자신 이외엔 나눠지는 수가 없어야 한다
      if (primeBaseCase.every(prime => eachNum % prime !== 0)) {
        primeBaseCase.push(eachNum);
        primes.push(eachNum);
      }
    }
    return primes;
  }
};

const solution = (numbers) => {
  const tool = new FindPrimeFromPermutation();
  const permuteSet = tool.calcPermutationTill([...numbers]);
  console.log(permuteSet);
  const primes = tool.findPrimes(permuteSet);
  console.log(primes)
  console.log(primes.length);
  return primes.length;
};


// Test Case 2, 4, 10, 11 통과 못하고있음 -> 확인해보기
// 모든 경우를 탙색하지 못 했거나, 소수를 제대로 구하지 못 했거나
solution('1201');