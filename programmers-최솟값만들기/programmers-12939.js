const solution = (A,B) => {
    
    const arrLength = A.length; 

    const sortByDesc = (arr) => arr.sort((a, b) => b - a);
    const sortByAsc = (arr) => arr.sort((a, b) => a - b);

    const ascA = sortByAsc([...A]);
    const descA = sortByDesc([...A]);

    const ascB = sortByAsc([...B]);
    const descB = sortByDesc([...B]);

    let case1 = 0;
    let case2 = 0;

    for (let i = 0; i < arrLength; i++) {
        case1 = case1 + ascA[i] * descB[i];
        case2 = case2 + ascA[i] * ascB[i];
    }

    return Math.min(case1, case2);
}

console.log(
    solution([1, 4, 2], [5, 4, 4])
);

