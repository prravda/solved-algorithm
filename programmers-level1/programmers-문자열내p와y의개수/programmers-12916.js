const solution = (s) => {
    let pCount = 0;
    let yCount = 0;
    const refinedString = [...s.toLowerCase()];
    refinedString.forEach(arg => {
        if (arg === 'p') {
            pCount ++;
        }
        if (arg === 'y') {
            yCount ++;
        }
    });
    if (pCount === yCount) {
        return true;
    } 
    return false;
};