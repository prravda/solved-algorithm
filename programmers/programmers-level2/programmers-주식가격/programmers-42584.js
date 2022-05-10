// solved with brute force using index 
const solution = (prices) => {
    const answer = [];
    for (let i = 0; i < prices.length; i++) {
        let temp = 0;
        for (let j = i; j < prices.length; j++) {
            if (i === j) {
                continue;
            }
            temp ++;
            if (prices[i] > prices[j]) {
                break;
            }
        }
        answer.push(temp);
    }
    console.log(answer)
}
// solution([1, 2, 3, 2, 3]);

const solvedWithStack = (prices) => {
    
}