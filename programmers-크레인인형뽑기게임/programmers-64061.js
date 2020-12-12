const solution = (board, moves) => {
    const results = [];
    let counter = 0;
    for (const colIndex of moves) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][colIndex - 1] !== 0) {
                if (results.length > 0 && results[results.length-1] === board[i][colIndex - 1]) {
                    results.pop();
                    counter = counter + 2;
                    board[i][colIndex - 1] = 0;
                    break;
                }
                results.push(board[i][colIndex - 1]);
                board[i][colIndex - 1] = 0;
                break;
            }
        }
    }
    return counter;
};

console.log(solution(
    [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],
    [1,5,3,5,1,2,1,4]
))
