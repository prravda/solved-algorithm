const numberToLocation = (number) => {
    // 행과 열을 담을 변수 col, row 을 면저 선언해줌
    let col, row;
    
    // 0일 경우
    if (number === 0) {
        return [1, 3];
    }

    // column 먼저 계산
    if (number % 3 === 0) {
        col = 2;
    } else {
        col = number%3 - 1;
    }

    // row 계산 - 지금은 하드코딩이지만 좀 동적으로 바꿔보자 
    if (number <= 3) {
        row = 0;
        return [col, row];
    }
    if (number <= 6) {
        row = 1;
        return [col, row];
    }
    if (number <= 9) {
        row = 2;
        return [col, row];
    }
};

const measureDistance = (current, target) => {
    return Math.abs(current[0] - target[0]) + Math.abs(current[1] - target[1]);
};


const solution = (numbers, hand) => {
    // 왼손 엄지 위치, 오른손 엄지 위치 초기값
    // 값이 갱신될 수 있으므로 let 으로 선언했음 
    let leftThumb = [0, 3];
    let rightThumb = [2, 3];

    const checker = [];
    
    return numbers.map(eachNum => {
        // 좌,우가 정해진 경우 -> currentLocation 좌표값을 갱신해주고, L / R 값을 바로 return 
        
        const currentLocation = numberToLocation(eachNum);

        if (currentLocation[0] === 0) {
            leftThumb = currentLocation;
            checker.push('L');
            return 'L';
        }
        if (currentLocation[0] === 2) {
            rightThumb = currentLocation;
            checker.push('R');
            return 'R';
        }
        // 좌, 우가 정해지지 않은 경우 -> numberToLocation(eachNum) 의 좌표와 leftThumb, rightThumb 간의 위치 비교
        // 만약 대소비교가 가능하다면 -> 더 가까운 거리의 쪽의 손가락 좌표를 갱신해주고, 가까운 손가락 방향을 return 
        // 만약 대소비교가 불가능하다면 -> hand 가 right 인지 left 인지 감지하고 left 면 왼손, right 면 오른손 갱신 & 방향 return
        const distanceOfLeft = measureDistance(currentLocation, leftThumb);
        const distanceOfRight = measureDistance(currentLocation, rightThumb);

        // 오른쪽이 더 가까운 경우
        if (distanceOfLeft > distanceOfRight) {
            rightThumb = currentLocation;
            checker.push('R');
            return 'R';
        }
        // 왼쪽이 더 가까운 경우 
        if (distanceOfLeft < distanceOfRight) {
            leftThumb = currentLocation;
            checker.push('L');
            return 'L';
        }

        // 양쪽 거리가 다 같은 경우
        // 위치정보 갱신해주고 왼손잡이면 L, 오른손잡이면 R return 해줌
        if (distanceOfLeft === distanceOfRight) {
            if (hand === 'left') {
                leftThumb = currentLocation;
                checker.push('L');
                return 'L'
            }
            if (hand === 'right') {
                rightThumb = currentLocation;
                checker.push('R');
                return 'R';
            }
        }
    }).join('');
};


// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));