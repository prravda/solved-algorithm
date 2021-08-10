const solution = (s) => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const length = s.length;
    if (length !== 4 && length !== 6) {
        return false;
    } 
    for (const arg of s) {
        if (numbers.indexOf(arg) == -1) {
            return false;
        } 
    }
    return true;
};

console.log(solution('1234'));