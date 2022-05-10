class FindPrimeFromPermutation {

  calcPermutation(numbers, amount) {
    const results = [];
    const findPermutation = (numberSet, tempArr) => {
      if (tempArr.length === amount) {
        results.push(Number(tempArr.map(idx => numberSet[idx]).join('')));
      }
      for (let i = 0; i < numberSet.length; i++) {
        if (tempArr.length === 0 && numberSet[i] === '0') {
          continue;
        }
        if (!tempArr.includes(i)) {
          tempArr.push(i);
          findPermutation(numberSet, tempArr);
          tempArr.pop();
        }
      }
    }
    findPermutation(numbers, []);
    return results;
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
      if (eachNum === 1) {
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

solution('1201');