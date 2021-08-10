const solution = (n, m) => {
    let gcm;
    const max = Math.max(n, m);
    const min = Math.min(n, m);

    if (max === min) {
        return [n, m];
    }

    for (let i = min; i >= 1; i--) {
        if ((min % i === 0) && (max % i === 0)) {
            gcm = i;
            break;
        }
    }

    return [gcm, gcm*(max/gcm)*(min/gcm)];
};

console.log(solution(3, 12));
console.log(solution(2, 5));