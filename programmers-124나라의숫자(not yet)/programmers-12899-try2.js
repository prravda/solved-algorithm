const solution = (n) => {
    let maxDigit = Math.floor(Math.cbrt(n));
    let digits = [];
    let currentValue = n;


    for (let i = maxDigit; i >= 0; i--) {
        let currentDigitNumber = 0;
        let currentDigitValue = 3 ** i;

        // 만약 나누는 수가 3보다 적다면 -> digits 에 currentValue 를 push 한다
        // 그리고 나서는 loop 을 종료한다
        if (currentValue < 3) {
            digits.push(currentValue);
            break;
        }

        if (currentValue % currentDigitValue === 0) {
            // 나누어 떨어지는데, 그 몫이 1인 경우
            if (currentValue / currentDigitValue === 1) {
                continue;
            }
            // 나누어 떨어지는데, 그 몫이 1이 아닌 경우(1보다 큰 경우들)
            currentDigitNumber = (currentValue / currentDigitValue) - 1;
          // 나누어 떨어지지 않는 경우
        } else {
            currentDigitNumber = Math.floor(currentValue / currentDigitValue);
        }
        // 계산한 자릿수를 넣어줌
        // 그리고, currentValue 에 나머지 값들을 재할당해줌
        digits.push(currentDigitNumber);
        currentValue = currentValue - (currentDigitValue * currentDigitNumber);
    }
    console.log(digits);
    return digits;
};

solution(10);