const splitter = (strings) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const options = ['#', '*'];

    let trialNumber = -1;
    let tempIndex = 0;
    let trials = [];
    
    for (const eachStr of strings) {
        // 해당 인자가 숫자인데, 그 전 인자도 숫자였다면
            if (tempIndex > 0 && numbers.indexOf(eachStr) !== -1 && numbers.indexOf(strings[tempIndex - 1]) !== -1) {
            tempIndex ++;
            trials[trialNumber].number = trials[trialNumber].number + eachStr;
            continue;
        }
        // 위의 경우는 아니지만, 그냥 해당 인자가 숫자라면 
        if (numbers.indexOf(eachStr) !== -1) {
            tempIndex ++;
            trialNumber ++;
            trials[trialNumber] = { number: eachStr };
            continue;
        }
        // 옵션인 경우
        if (options.indexOf(eachStr) !== -1) {
            tempIndex ++;
            trials[trialNumber].option = eachStr;
            continue;
        }
        // single, double, triple 인 경우
        tempIndex ++;
        if (eachStr === 'S') {
            trials[trialNumber].region = 1;
        }
        if (eachStr === 'D') {
            trials[trialNumber].region = 2;
        }
        if (eachStr === 'T') {
            trials[trialNumber].region = 3;
        }
    }

    return trials.map(trial => {
        return {
            number: Number(trial.number),
            region: trial.region,
            option: trial.option === undefined? 'none' : trial.option
        }
    });
}

const solution = (dartResult) => {
    
    let scoreArr = [];
    let index = 0;
    let splitted = splitter(dartResult);

    for (const trial of splitted) {
        // 스타상인 경우
        if (trial.option === '*') {
            // 첫 번째 시행에서 스타상이 걸린 경우 - 해당 시행만 점수 2배
            if (index === 0) {
                scoreArr.push((trial.number ** trial.region) * 2);
                index ++;
                continue;
            } 
            // 두 번째 이상 시행에서 스타상이 걸린 경우 - 전의 시행도, 이번 시행도 점수 2배
            scoreArr[index - 1] = scoreArr[index - 1] * 2; 
            scoreArr.push((trial.number ** trial.region) * 2);
            index ++;
            continue;
        }
        // 아차상의 경우
        if (trial.option === '#') {
            scoreArr.push((trial.number ** trial.region) * -1);
            index ++;
            continue;
        }
        // 아무런 옵션이 없는 경우
        if (trial.option === 'none') {
            scoreArr.push(trial.number ** trial.region);
            index ++;
            continue;
        }
    }

    return scoreArr.reduce((curr, accm) => {
        return curr + accm;
    });
};

console.log(solution('1S*2T*3S'));