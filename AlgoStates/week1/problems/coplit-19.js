const divideChocolateStick = (A, N) => {
  // get GCD of A and N with Modulo
  const getGCD = (a, b) => {
    if (b === 0) {
      return a;
    }
    return getGCD(b, a%b);
  }

  const GCD = getGCD(A, N);
  const sqrtOfGCD = Math.sqrt(GCD);
  
  // find divisors of GCD smaller than sqrtOfGCD
  const divisors = [];
  for (let i = 1; i <= sqrtOfGCD; i++) {
    if (GCD % i === 0) {
      // if i is sqrtOfGCD, remove the duplicate case(push only i)
      if (i === sqrtOfGCD) {
        divisors.push(i);
        continue;
      }
      // else, push i and GCD/i to divisors array
      divisors.push(i, GCD/i);
    }
  }

  // calculate cases
  const availableCases = divisors.map(eachDivisor => {
    return [eachDivisor, (A / eachDivisor), (N / eachDivisor)];
  });
  
  console.log(availableCases);
  return availableCases;
};
