const solution = (n) => {
    let exp = 0;
    while (3 ** exp <= n) {
        exp ++;
    }
    let rawNumber = n;
    let terExp = exp - 1;
    const container = [];
    while (terExp >= 0) {
        const terExpNum = 3 ** terExp;
        const terExpDigit = Math.floor(rawNumber/terExpNum);
        container.push(terExpDigit);
        rawNumber = rawNumber - (terExpNum * terExpDigit);
        terExp --;
    }
    return container.reduce((accm, arg, index) => {
        return accm + (arg*(3**index));
    }, 0);
};
console.log(solution(45));
