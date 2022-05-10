const solution = (info, query) => {
    const fullfilled = query.map(eachQuery => {
        const regex = /and /g;
        const condition = eachQuery.replace(regex, '').split(' ');
        let numberOfFullfilledApplicant = 0;
        
        for (const applicant of info) {
            const applicantCondition = applicant.split(' ');
            const indexOfScore = applicantCondition.length - 1;

            // 지원자의 점수가 자격에 기재된 점수 미만이라면 해당 지원자는 검산하지 않고 바로 넘어간다
            if (condition[indexOfScore] !== '-' && Number(applicantCondition[indexOfScore]) < Number(condition[indexOfScore])) {
                continue;
            }

            for (let i = 0; i < applicantCondition.length; i++) {
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
