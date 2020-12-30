const solution = (n) => {
    let maxDigit = Math.floor(Math.cbrt(n));
    let digits = [];
    let currentValue = n;

    if (currentValue <= 3) {
        if (currentValue === 3) {
            return '4';
        }
        return String(currentValue);
    }
    
    for (let i = maxDigit; i >= 0; i--) {
        const digitValue = i === 0? 1 : 3 ** maxDigit;
        let currentDigit = 0;
        let convertedDigit = 0;

        if (currentValue % digitValue === 0 && i !== 0) {
            currentDigit = (currentValue/digitValue) - 1;
        } else {
            currentDigit = Math.floor(currentValue/digitValue);
        }

        if (i === 0 && currentDigit === 3) {
            currentDigit = 4;
        }

        digits.push(currentDigit);
        currentValue = currentValue - (digitValue * currentDigit);
        maxDigit --;
    };
    return digits.join('');
};

console.log(solution(6));