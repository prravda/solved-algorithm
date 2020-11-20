// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 어디서 예외들이 발생할까?


const solution = (n) => {
    let exponent = 0;
    while (3 ** exponent < n) {
        exponent ++;
    }

    let rawNumber = n; // 다시 활용하기 위한 원래의 숫자 
    let ternaryExponent = exponent - 1; // 삼진법으로 나타낸 수 중, 가장 큰 단위의 3의 지수, 삼진법 수의 last index 역할도 가능 
    const container = []; // 삼진법 수들을 넣어주기 위한 배열

    // 십진법의 수를 삼진법으로 변환
    while (ternaryExponent >= 0) {
        const digitNumber = 3**ternaryExponent;
        const number = Math.floor(rawNumber/digitNumber);
        container.push(number);
        rawNumber = rawNumber - digitNumber * number;
        ternaryExponent --;
    }

    console.log(container);

    const reverserTernary = container.reverse();
    const maxIndex = reverserTernary.length - 1;
    const converToDecimal = reverserTernary.reduce((accm, arg, index) => {
        return accm + arg * (3 ** (maxIndex - index));
    }, 0);
    return converToDecimal;
};

console.log(solution(125));

