const solution = (num) => {
    let counter = 0;
    let target = num;
    while (target !== 1) {
        if (counter === 500) {
            return -1;
        }
        if (target % 2 === 0) {
            counter ++;
            target = target / 2;
            continue;
        }
        if (target % 2 !== 0) {
            counter ++;
            target = target*3 + 1;
            continue;
        }
    }
    return counter;
};

console.log(solution(626331));