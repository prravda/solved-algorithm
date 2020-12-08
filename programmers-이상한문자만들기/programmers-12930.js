const solution = (s) => {
    const splittedStr = s.split(' ');
    return splittedStr.map(word => {
        if (word === ' ') {
            return ' ';
        }
        return word.split('').map((letter, index) => {
            // 짝수번째 index -> 대문자로 변환 
            if (index % 2 === 0) {
                return letter.toUpperCase();
            }
            // 홀수번째 index -> 소문자로 변환
            return letter.toLowerCase();
        }).join('');
    }).join(' ');
};

console.log(solution("try hello world"));