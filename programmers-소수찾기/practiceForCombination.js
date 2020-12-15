// 먼저 2개씩, 그리고 3개씩까지 뽑는 걸 만들어보자
const combinator = (arr) => {
    let numberToPick = 2;
    let fixedDigit = 0;
    let fixedIndex = 0;

    while (numberToPick <= 3) {
        let tempArr = new Array(numberToPick);
        tempArr[fixedDigit] = arr[fixedIndex];
    }
};

combinator(['a', 'b', 'c', 'd']);