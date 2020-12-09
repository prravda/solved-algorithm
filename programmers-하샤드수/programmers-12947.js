const solution = (x) => {
    const sumofDigits = String(x).split('').reduce((accm, curr) => Number(accm) + Number(curr), 0);
    if (x % sumofDigits === 0) {
        return true;
    } return false;
};

console.log(solution(13));