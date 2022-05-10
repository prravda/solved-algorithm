const solution = (number, k) => {
    // k 개를 지울 수 있으니 removable 이라는 재할당 가능한 변수에 k를 할당해준다
    let removable = k;
    // 크기를 비교할 stack 을 만들어주고, 그 stack 의 첫 번째 값으로는 number 의 0번째 문자열을 넣어준다
    const tempStack = [number[0]];
    // 한 개를 제외했으니, 이제 startAfterFirst 라는 string 에 number 의 1번째부터 넣어준다
    const startAfterFirst = number.slice(1);
    for (const num of startAfterFirst) {
        // tempStack 이 빈 배열이 아닌 상황에서, tempStack 의 마지막 인자가 비교하려는 수보다 작다면
        while (tempStack.length > 0 && tempStack[tempStack.length - 1] < Number(num) && removable > 0) {
            // 위의 조건이 끝나기 전까지 tempStack 에서 마지막 element 를 빼주고 
            // removable 에서 1을 제외해준다 (1개를 제거하였으니깐)
            removable --;
            tempStack.pop();
        }
        // 해당 과정이 끝난다면 이제 tempStack 에 num 을 넣어준다
        tempStack.push(num);
    }
    // tempStack 은 크기순으로 정렬이 되었으니, 잘라내지 못 한 수가 있다면 slice 로 잘라준다
    return tempStack.slice(0, tempStack.length - removable).join('');
};