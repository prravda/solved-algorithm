const solution = (s) => {
    const stringLength = s.length;
    const divsOfLength = [];
    for (let i = 1; i < Math.ceil(stringLength / 2); i++) {
        if (stringLength % i === 0) {
            if (i === 1) {
                divsOfLength.push(i);
                continue;
            }
            divsOfLength.push(i, stringLength/i);
        }
    }

    const allCaseOfSlicedStrings = divsOfLength.map((eachLength) => {
        const eachSlicedCase = [];
        let currentIndex = 0;
        for (let i = 0; i < stringLength / eachLength; i++) {
            const sliced = s.slice(currentIndex, currentIndex + eachLength);
            currentIndex = currentIndex + eachLength;
            eachSlicedCase.push(sliced);
        }
        return eachSlicedCase;
    });

    const lengthOfSlicedStrings = allCaseOfSlicedStrings.map((eachString) => {
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
        console.log(arrayForRepeatedLetters);
        return arrayForRepeatedLetters.join('').length;
    });
    return Math.min(...lengthOfSlicedStrings);
};

console.log(solution("abcabcdede"));

/**
 * 문제를 잘못 풀었다, 문제를 잘못 봐서 잘못 풀었다. 앞으로는 정신 똑바로 차리고 문제부터 잘 읽자.
 * 꼭 "나누어 떨어지는 단위" 로 잘라야 하는 게 아닌데, 그냥 내 임의대로 그렇게 해 버렸다.
 * 일단 이 코드는 이대로 남겨놓고... 시간이 너무 늦었으니 잤다가 다시 시도하자.
 */