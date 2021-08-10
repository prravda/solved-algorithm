// function solution(arr) {
//     arr.map((arg, index, rawArr) => {

//     });
// }

function solution(prices) {
    let answer = ARray(prices.length).fill(0);
    let stack = [];
    for (let i = 0; i< prices.length; i++) {
        stack.push(i);
        let temp = [];
        while (stack.length) {
            let pIdx = stack.pop();
            if (prices[pIdx] > prices[i]) {
                answer[pIdx] = i - pIdx;
            } else {
                temp.push(pIdx);
            }
        }
        stack = temp;
    }
}