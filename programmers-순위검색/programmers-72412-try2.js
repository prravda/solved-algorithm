const queryRefiner = (queryString) => queryString.replace(/and /g, '').split(' ');
const applicantRefiner = (applicant) => applicant.split(' ');

class Condition {
    constructor(
        lang,
        position,
        level,
        soulFood,
        score
    ) {
        this.lang = lang;
        this.position = position;
        this.level = level;
        this.soulFood = soulFood;
        this.score = score;
    }

    isFitWithScore (score) {
        if (this.score === '-' || score >= this.score) {
            return true;
        }
        return false;
    };

    isFitWithLang (lang) {
        if (this.lang === '-' || lang === this.lang) {
            return true;
        }
        return false;
    };

    isFitWithPosition (position) {
        if (this.position === '-' || position === this.position) {
            return true;
        }
        return false;
    }

    isFitWithLevel (level) {
        if (this.level === '-' || level === this.level) {
            return true;
        }
        return false;
    }

    isFitWithSoulFood (soulFood) {
        if (this.soulFood === '-' || soulFood === this.soulFood) {
            return true;
        }
        return false;
    }
}

class Applicant {
    constructor(
        lang,
        position,
        level,
        soulFood,
        score
    ) {
        this.lang = lang;
        this.position = position;
        this.level = level;
        this.soulFood = soulFood;
        this.score = score;
    }

    get score() {
        return this.score;
    };

    get lang() {
        return this.lang;
    };

    get position() {
        return this.position;
    };

    get level() {
        return this.level;
    };

    get soulFood() {
        return this.soulFood;
    }
}

const solution = (info, query) => {
    let numberOfAcceptedPerson = 0;
    for (const eachQuery of query) {
        const condition = new Condition([...queryRefiner(eachQuery)]);
        for (const eachApplicant of info) {
            const applicant = new Applicant([...applicantRefiner(eachApplicant)]);
            if ([
                condition.isFitWithScore(applicant.score),
                condition.isFitWithLang(applicant.lang),
                condition.isFitWithPosition(applicant.position),
                condition.isFitWithLevel(applicant.level),
                condition.isFitWithSoulFood(applicant.soulFood)
            ].every(arg => arg === true)) {
                numberOfAcceptedPerson ++;
            } 
        }
    }
    return numberOfAcceptedPerson;
};

solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["- and - and - and - 150"]);
