const solution = (s) => {
    const inputString = s;
    const stringLength = s.length;
    const sliceCase = [];

    // 길이가 1인 문자열이 들어오는 경우 -> 그냥 1을 반환해준다
    if (stringLength === 1) {
        return 1;
    }

    // 반복 가능한 문자열의 단위 계산 -> sliceCase 에 push
    for (let i = 1; i <= Math.floor(stringLength / 2); i++) {
        sliceCase.push(i);
    }

    // sliceCase 를 기반으로 문자열을 나눔 -> slicedString 에 push
    const slicedString = sliceCase.map(eachLength => {
        const tempSlicedString = [];
        for (let i = 0; i <= Math.floor(stringLength / eachLength); i++) {
            if (eachLength * (i + 1) >= stringLength) {
                tempSlicedString.push(inputString.slice(eachLength * i));
                break;
            }
            tempSlicedString.push(inputString.slice(eachLength * i, eachLength * (i + 1)));
        }
        return tempSlicedString;
    });

    // 반복이 얼마나 되는지를 비교하는 알고리즘
    const lengthOfSlicedStrings = slicedString.map((eachString) => {
        let repeatedCount = 1;
        const arrayForRepeatedLetters = [];

        for (let i = 0; i < eachString.length; i++) {
            // 마지막 index 가 아닌 경우에 한해서 해당 연산을 진행함
            if (i !== eachString.length - 1 && eachString[i] === eachString[i + 1]) {
                repeatedCount ++;
                continue;
            }
            if (eachString[i] !== eachString[i + 1]) {
                if (repeatedCount === 1) {
                    arrayForRepeatedLetters.push(eachString[i]);
                } else {
                    arrayForRepeatedLetters.push(`${repeatedCount}${eachString[i]}`);
                }
                repeatedCount = 1;
            }
        }
        return arrayForRepeatedLetters.join('').length;
    });
    // 그렇게 줄인 문자열 중 가장 적은 값을 반환
    return Math.min(...lengthOfSlicedStrings);
};

console.log(solution("a"));

/**
 * 문제를 잘못 풀었다, 문제를 잘못 봐서 잘못 풀었다. 앞으로는 정신 똑바로 차리고 문제부터 잘 읽자.
 * 꼭 "나누어 떨어지는 단위" 로 잘라야 하는 게 아닌데, 그냥 내 임의대로 그렇게 해 버렸다.
 * 일단 이 코드는 이대로 남겨놓고... 시간이 너무 늦었으니 잤다가 다시 시도하자.
 */