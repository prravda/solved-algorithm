const solution = (n) => {
    let maxDigit = Math.floor(Math.log(n) / Math.log(3));

    let eachDigitValue = [];
    for (let i = maxDigit; i >= 0; i--) {
        eachDigitValue.push(3**i);
    }

    let digits = [];
    let currentValue = n;

    for (let i = maxDigit; i >= 0; i--) {
        let currentDigitValue = 3 ** i;
        let currentDigitNumber = Math.floor(currentValue / currentDigitValue);
        let restValue = currentValue - (currentDigitValue * currentDigitNumber);

        if (i === 0) {
            if (currentValue === 3) {
                digits.push(4);
            } else {
                digits.push(currentValue);
            }
            break;
        }

       const sumOfRest = eachDigitValue.slice(maxDigit - i + 1).reduce((curr, accm) => curr + accm);

       if (restValue < sumOfRest || restValue > 3 * sumOfRest + 1) {
           currentDigitNumber --;
       }

       if (currentDigitNumber === 0 && i === maxDigit) {
           continue;
       }
       if (currentDigitNumber === 3) {
           digits.push(4);
       } else {
           digits.push(currentDigitNumber);
       }

       currentValue = currentValue - (currentDigitValue * currentDigitNumber);
    }
    return digits.join('');
};

// console.log(solution(513));
console.log(solution(28));
