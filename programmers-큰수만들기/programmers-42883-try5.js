const solution = (number, k) => {
    let numToArr = [...number].map(arg => Number(arg));
    let removable = k;
    const lengthOfOriginNumber = numToArr.length;
    
    // 최댓값의 기준: 이전의 최댓값보다 크다 && 다음의 값보다 크다
    // 최댓값을 찾으려는 범위: 첫 번째 수부터 removable 까지
    // 최댓값의 초기값: 첫 번째 index
    let tempMax = numToArr[0];
    let tempMaxIndex = 0;
    for (let i = 0; i < removable; i++) {

    }
};

console.log(solution("4177252841", 4));
// console.log(solution("1924", 2));
// console.log(solution("1231234", 3));
// console.log(solution("10100", 3));
// console.log(solution("54321", 3));
// console.log(solution("222222", 4));
// console.log(solution("1", 0));
// console.log(solution("54321", 3));
// console.log(solution("4177252841", 4));
// console.log(solution("1742532", 5));
// console.log(solution("127589154", 5));
// console.log(solution("87659", 3));