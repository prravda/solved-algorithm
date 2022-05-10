const solution = (N, stages) => {
    const failureRate = [];
    for (let i = 1; i <= N; i++) {
        let userOnStage = 0; 
        let userNotClearedStage = 0;
        for (const userStage of stages) {
            if (userStage === i) {
                userNotClearedStage ++
            }
            if (userStage >= i) {
                userOnStage ++;
            }
        }
        failureRate.push([i, userNotClearedStage/userOnStage]);
    }

    const sortedArr = failureRate.sort((a, b) => {
        if (a[1] > b[1]) {
            return -1;
        }
        if (a[1] < b[1]) {
            return +1;
        }
        if (a[1] === b[1]) {
            if (a[0] > b[0]) {
                return +1;
            }
            if (a[0] < b[0]) {
                return -1;
            }
        }
    });

    return sortedArr.map(arg => arg[0]);
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));