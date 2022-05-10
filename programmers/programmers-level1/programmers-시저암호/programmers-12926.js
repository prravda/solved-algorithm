const solution = (s, n) => {

    // 소문자 charCode
    const lowerCaseFirstCharCode = 'a'.charCodeAt();
    const lowerCaseLastCharCode = 'z'.charCodeAt();

    // 대문자 charCode
    const upperCaseFirstCharCode = 'A'.charCodeAt();
    const upperCaseLastCharCode = 'Z'.charCodeAt();


    return s.split('').map(arg => { 
        // 공백문자인 경우
        if (arg === ' ') {
            return arg;
        }
        
        if (lowerCaseFirstCharCode <= arg.charCodeAt()  && arg.charCodeAt() <= lowerCaseLastCharCode) {
            // 소문자인 경우 + n 뒤의 문자가 z 의 charCode 를 넘기는 경우 
            if (arg.charCodeAt() + n > lowerCaseLastCharCode) {
                return String.fromCharCode(arg.charCodeAt() + n - lowerCaseLastCharCode + lowerCaseFirstCharCode - 1);
            }
            // 소문자인 경우 + n 뒤의 문자가 z 의 charCode 를 넘기지 않는 경우 
            return String.fromCharCode(arg.charCodeAt() + n);
        }

        if (upperCaseFirstCharCode <= arg.charCodeAt() && arg.charCodeAt() <= upperCaseLastCharCode) {
            if (arg.charCodeAt() + n > upperCaseLastCharCode) {
                return String.fromCharCode(arg.charCodeAt() + n - upperCaseLastCharCode + upperCaseFirstCharCode - 1);
            }
            // 대문자인 경우 + n 뒤의 문자가 Z 의 charCode 를 넘기지 않는 경우
            return String.fromCharCode(arg.charCodeAt() + n);
        }
    }).join('');
};

console.log(solution("a C z", 25));
// console.log(solution("z", 1));