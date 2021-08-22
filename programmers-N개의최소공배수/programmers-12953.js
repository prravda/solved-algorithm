/* 
두 수의 최대공배수 === 숫자1 * 숫자2 / 숫자1, 2의 최대공약수
1. 두 수의 최대공약수를 구한다
2. 1을 이용해 두 수의 최대공배수를 구한다
3. 2를 reduce 함수의 reducer 로 사용, n개의 수의 최대공배수를 구한다
*/

const getGCDOfTwo = (a, b) => {
    const aux = (n1, n2) => {
        if (n2 === 0) {
            return n1;
        }
        return aux(n2, n1%n2);
    }
    return aux(a, b);
}

const getLCMOfTwo = (a, b) => {
    const gcd = getGCDOfTwo(a, b);
    return a * b / gcd;
}

const solution = (arr) => {
    return arr.reduce(getLCMOfTwo);
}

solution([2, 6, 8, 14]);

