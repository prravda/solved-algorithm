const solution = (s) => {
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // split by whitespace
    const words = s.split(' ');
    // console.log(words);
    const jadenStyleApplied = words.map(word => {
        // apply lowercase to all letters basically
        let lowerWord = word.toLowerCase();

        // 1. if first letter is number, skip
        // if (nums.includes(lowerWord[0])) {
        //     return lowerWord;
        // }
        if (/[0-9]/g.test(lowerWord[0])) {
            return lowerWord;
        }
        
        // 2. if first letter is not number, make first letter UpperCase
        let wordArr = [...lowerWord];
        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i] !== ' ') {
                wordArr[i] = wordArr[i].toUpperCase();
                break;
            }
        }
        return wordArr.join('');
    });

    return jadenStyleApplied.join(' ');
}

// const result = solution("3people unFollowed me");
// console.log(result);
// console.log(solution("hello         word!"));