const solution = (info, query) => {
    const fullfilled = query.map(eachQuery => {
        const regex = /and /g;
        const condition = eachQuery.replace(regex, '').split(' ');
        let numberOfFullfilledApplicant = 0;
        for (const applicant of info) {
            const applicantCondition = applicant.split(' ');
            const lastIndex = applicantCondition.length - 1;
            for (let i = 0; i < applicantCondition.length; i++) {
                // 가장 먼저 점수를 비교해준다, 점수 조건이 맞지 않으면 앞의 조건을 판별할 의미가 없기 때문이다
                // 점수가 요구사항보다 
                if (condition[lastIndex] !== '-' && Number(applicantCondition[lastIndex] < Number(condition[lastIndex]))) {
                    break;
                }
                // 마지막에 점수를 비교하는 경우 -> Number 형식으로 바꾸어서 비교한다
                // 조건 중 '-' 가 있어 해당 조건을 신경쓰지 않는다면 넘어감
                if (i === applicantCondition.length - 1) {
                    if (condition[i] === '-' || Number(applicantCondition[i]) >= Number(condition[i])) {
                        numberOfFullfilledApplicant ++;
                    }
                }
                // 조건 중 '-' 가 있어 해당 조건을 신경쓰지 않는다면 넘어감
                if (condition[i] === '-') {
                    continue;
                }
                // 조건이 맞지 않는 경우 -> 바로 연산 종료
                if (condition[i] !== applicantCondition[i]) {
                    break;
                }
            }
        }
        return numberOfFullfilledApplicant;
    });
    return fullfilled;
};

solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["- and - and - and - 150"]);
