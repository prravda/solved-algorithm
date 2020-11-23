const solution = (n) => {
    const sqrtOfN = [...Array(Math.floor(Math.sqrt(n))).keys()].slice(2);
    const numberList = [...Array(n).keys(), n].slice(2);
    const primes = [];
    numberList.filter(number => {
        if (sqrtOfN.every(compare => number % compare !== 0)) {
            return true;
        } 
        return false;
    });
    return primes.length;
};

console.log(solution(5));

