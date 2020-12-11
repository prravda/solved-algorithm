// 구현 유형 중 시뮬레이션 문제이다 (주어진 시나리오대로 수행하고 그 결과를 반환하는 것)
// 상하좌우 방향이란 정보를 입력받으면, 어떻게 움직일지 이야기해준다
// 조건으로는 여행공간의 크기가 size 로 주어지고, 시작좌표는 항상 (1, 1) 이며, 
// 여행좌표에서 벗어난 움직임은 무시된다 (1, 1) 에서 L 을 입력받았다든지 등)

const solution = (size, direction) => {

  let currentLocation = [1, 1];

  for (eachDirection of direction) {
    if (eachDirection === 'U') {
      if (currentLocation[0] - 1 < 1) {
        continue;
      }
      currentLocation[0] = currentLocation[0] - 1;
    }
    if (eachDirection === 'D') {
      if (currentLocation[0] + 1 > size) {
        continue;
      }
      currentLocation[0] = currentLocation[0] + 1;
    }
    if (eachDirection === 'L') {
      if (currentLocation[1] - 1 < 1) {
        continue;
      }
      currentLocation[1] = currentLocation[1] - 1;
    }
    if (eachDirection === 'R') {
      if (currentLocation[1] + 1 > size) {
        continue;
      }
      currentLocation[1] = currentLocation[1] + 1;
    }
  }

  return currentLocation;
};

console.log(solution(5, ["R", "R", "R", "U", "D", "D"]));