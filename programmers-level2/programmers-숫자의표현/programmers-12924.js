const solution = (n) => {
    let ceil = 1;
    while ((1 + ceil) * ceil < 2*n) {
        ceil ++;
    }
    let counter = 0;
    for (let numOfnum = 1; numOfnum <= ceil; numOfnum++) {
        for (let firstNum = 1; firstNum <= n; firstNum++) {
            const lastNum = (firstNum + numOfnum - 1);
            if ((firstNum + lastNum) * numOfnum === n * 2) {
                counter ++;
            }
        }
    }
    return counter;
}

solution(15);