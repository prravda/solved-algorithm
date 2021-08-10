const solution = (n) => {
    let str = '';
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            str = str + '수';
        } 
        if (i % 2 === 0) {
            str = str + '박';
        }
    }
    return str;
};

console.log(solution(5));