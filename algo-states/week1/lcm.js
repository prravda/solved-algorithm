// gcd logic to calculate lcm

const gcdOfTwoNumbers = (a, b) => {
  if(b === 0) {
    return a;
  }
  return gcdOfTwoNumbers(b, a%b);
}

const gcdWithModulo = (numbers) => {
  return numbers.reduce(gcdOfTwoNumbers);
}

// lcm logic
const lcmWithGCD = (a, b) => {
  return (a * b) / gcdOfTwoNumbers(a, b);
}

const lcmForManyNumbers = (numbers) => {
  return numbers.reduce(lcmWithGCD);
}

class CalculatorForGCDAndLCM {
  calculateGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return this.calculateGCD(b, a%b);
  }

  calculateGCDwithArray(numbers) {
    // array type guard
    if (Array.isArray(numbers) === false) {
      throw Error('error: input array of number(s)');
    }
    return numbers.reduce(this.calculateGCD);
  }

  calculateLCM(a, b) {
    return (a * b) / this.calculateGCD(a, b);
  }

  calcalateLCMWithArray(numbers) {
    // array type guard
    if (Array.isArray(numbers) === false) {
      throw Error('error: input array of number(s)');
    }
    return numbers.reduce(this.calculateLCM);
  }
}

console.log(lcmForManyNumbers([2, 5, 3]));