const solution = (w, h) => {
    let numbersOfUnusableSquare = 0;
    for (let a = 0; a <= w-1; a++) {
        numbersOfUnusableSquare.push((Math.ceil((h/w) * (a+1)) - Math.floor((h/w) * a)));
    }
    return (w*h) - numbersOfUnusableSquare;
};

console.log(solution(8, 12));

/**
 * 가로, 세로 방향과 평행하게 1cm / 1cm 를 잘라 사용할 수 있는 만큼만 사용한다는 게 무슨 말일까? 
 * 좌표평면으로 두고 일차방정식의 해가 해당 좌표평면 범위안에 존재하는지를 생각해보기로 했다. 
 * 
 * 좌표평면으로 풀었으나, 해당 계산 방법은 컴퓨터 기준으로 아주 미세한 오차가 발생하여 6번 테스트케이스를 통과하지 못 한다.
 * 다른 방법을 찾아보도록 하자.
 */