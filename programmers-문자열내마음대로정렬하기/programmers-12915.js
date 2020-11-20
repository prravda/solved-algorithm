const solution = (strings, n) => {
    const beforeCompared = strings.map(arg => {
        return [arg, arg[n], arg[0]];
    });
    const compared = beforeCompared.sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;  
        } else if (a[1] === b[1]) {
            if (a[0] < b[0]) {
                return -1
            } else if (a[0] > b[0]) {
                return 1;
            }
        }
    });
    return compared.map(arg => arg[0]);
};

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));