const solution = (progresses, speeds) => {
    const stackArr = [];
    while (progresses.length !== 0) {
        const neededDay = Math.ceil((100 - progresses[0])/speeds[0]);
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] = progresses[i] + (neededDay * speeds[i]);
        }
        let tempArr = [];
        while (progresses[0] >= 100 && progresses.length !== 0) {
            tempArr.push(progresses[0]);
            progresses.shift();
            speeds.shift();
        }
        stackArr.push(tempArr.length);
    }
    return stackArr;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));