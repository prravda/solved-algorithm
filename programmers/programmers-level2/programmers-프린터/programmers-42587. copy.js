const solution = (priorities, location) => {
    // mutation 을 막기 위해 copiedPriorites 에 새로운 배열을 만들어준다
    const copiedPriorities = priorities.map((arg, idx) => [idx, arg]);
    const printedList = [];

    // printedList 에 copiedPriorities 의 모든 element 가 들어갈 때까지 아래의 과정을 반복한다
    while (printedList.length !== priorities.length) {
        // 만약 모든 priority 가 0번째 priority 보다 작다면 -> 배열의 첫 번째 인자를 printedList 에 추가한다
        if (copiedPriorities.slice(1).every((arg) => arg[1] <= copiedPriorities[0][1])) {
            printedList.push(copiedPriorities.shift());
            continue;
        }
        // 그렇지 않다면 -> 배열의 첫 번째 인자를 맨 뒤로 옮긴다
        copiedPriorities.push(copiedPriorities.shift());
    };

    // 이제 printedList 를 순회하면서 eachPrint[0] 의 index 값이 Location 과 같은 경우를 찾음
    // 그리고 나서, Location 에 + 1 을 해서 return 해줌 (컴퓨터 기준으로 0번째는 사람에게 1번째이니까)
    let indexToReturn = 0;
    for (const eachPrint of printedList) {
        if (eachPrint[0] === location) {
            return indexToReturn + 1;
        }
        indexToReturn ++;
    };
};

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));