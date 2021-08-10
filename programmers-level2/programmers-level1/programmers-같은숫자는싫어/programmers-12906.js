const solution = (arr) => {
    const returnArr = arr.map((arg, index) => {
        if (arg !== arr[index+1]) {
            return arg;
        }
    });
    return returnArr.filter(arg => arg !== undefined);
};