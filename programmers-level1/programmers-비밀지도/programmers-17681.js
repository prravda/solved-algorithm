const solver = (cryptedArray, digit) => {
    return cryptedArray.map(arg => {
        const parsedToBinary = arg.toString(2).split('');
        const fitWithDigits = [
            ...new Array(digit - parsedToBinary.length).fill('0'), 
            ...parsedToBinary
        ];
        return fitWithDigits.map(decryptedArg => {
            if (decryptedArg === '1') {
                return '#';
            } 
            if (decryptedArg === '0') {
                return ' ';
            }
        });
    });
}

const solution = (n, arr1, arr2) => {
    const decryptedArr1 = solver(arr1, n);
    const decryptedArr2 = solver(arr2, n);

    return decryptedArr1.map((eachRow, rowIndex) => {
        return eachRow.map((eachArg, colIndex) => {
            if (eachArg === ' ' && decryptedArr2[rowIndex][colIndex] === ' ') {
                return ' ';
            }
            if (eachArg === '#' || decryptedArr2[rowIndex][colIndex] === '#') {
                return '#';
            }
        }).join('')
    });
};

console.log(solution(
    5,
    [9, 20, 28, 18, 11],
    [30, 1, 21, 17, 28]
));
// console.log(solution(-4, 2));
