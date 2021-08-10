const solution = (s) => {

    const getMaxDigit = (n) => {
        let digit = 0;
        while (2 ** digit <= n) {
            digit ++;
        }
    
        // 더 크다면 -> 1을 제하고 반환
        if (2 ** digit > n) {
            return (digit - 1);
        }
        // 작거나 같은 경우는 그냥 반환
        return digit;
    }

    const removeZero = (str) => {
        // count the 0
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '0') {
                numberOfRemovedZero ++;
            }
        }
        // remove 0 from str
        return str.replace(/0/gi, '');
    }

    const converToBinary = (str) => {
        numberOfConvertion ++;
        // set the input string's length 
        let strLength = str.length;
        // calculate the max digit in binary of strLength
        let maxDigit = getMaxDigit(strLength);
        // conver to binary 
        let binResult = [];
        for (let i = maxDigit; i >= 0; i--) {
            const digit = Math.floor(strLength / 2**i);
            if (digit === 0) {
                binResult.push(0);
                continue;
            }
            binResult.push(digit);
            strLength = strLength % (digit * 2**i);
        }
        return binResult.join('');
    }

    // count the removed zero's amount
    let numberOfRemovedZero = 0;
    let numberOfConvertion = 0;

    let inputStr = s;
    while (inputStr !== '1') {
        const strRemovedZero = removeZero(inputStr);
        inputStr = converToBinary(strRemovedZero);
    }
    
    return [numberOfConvertion, numberOfRemovedZero];
}



solution("110010101001");