const solution = (progresses, speeds) => {
    const stackedArr = [];
    let tempArr = [];
    while (progresses.some(eachProgress => eachProgress < 100)) {
        for (let i = 0; i < progresses.length; i++) {
            // 0번째 task 가 완료되면 -> shift 로 삭제해주고 해당 task 삭제, stackArr 에 tempArr.length push, 
            // 그 다음에는 tempArr 초기화, 
            progresses[i] = progresses[i] + speeds[i];

            if (progresses)
            if (i === 0 && progresses[i] >= 100) {
                tempArr.push(i);
                progresses.shift();
                speeds.shift();
                stackedArr.push(tempArr.length);
                tempArr = [];
            }

            if (progresses[i] >= 100) {
                tempArr.push(i);
                progresses.splice(i, 1);
                speeds.splice(i, 1);
            }
        }
    }
    return stackedArr;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));