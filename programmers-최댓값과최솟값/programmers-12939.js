function solution(s) {
    const numbers = s.split(' ').map(str => Number(str));
    return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}

// console.log(
//     // solution("1 2 3 4")
//     // solution("-1 -1")
//     solution("-1 -2 -3 -4")
// );