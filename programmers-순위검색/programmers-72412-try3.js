const queryRefiner = (queryString) => queryString.replace(/and /g, '').split(' ');
const applicantRefiner = (applicant) => applicant.split(' ');

const solution = (info, query) => {
    const passedApplicantArr = query.map(eachQuery => {
        let passedApplicant = 0;

        const condition = queryRefiner(eachQuery);
        for (const eachApplicant of info) {
            const applicant = applicantRefiner(eachApplicant);
            const scoreIndex = condition.length - 1;
            
            if (condition[scoreIndex] !== '-' && Number(applicant[scoreIndex]) < Number(condition[scoreIndex])) {
                continue;
            }
    
            for (let i = 0; i < condition.length - 1; i++) {
                if (condition[i] === '-') {
                    continue;
                }
                if (condition[i] !== applicant[i]) {
                    break;
                }
            }
            passedApplicant ++;
        }
        return passedApplicant;
    });
    console.log(passedApplicantArr);
    return passedApplicantArr;
};

solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["- and - and - and - 150"]);
