// initLocation: 캐릭터의 위치(좌표계) 와 캐릭터가 바라보는 방향을 담음 (array)
// gameTable: 육지 혹은 바다 여부가 표시된 배열을 return 
// 제한시간 1초이므로 2,000만번의 연산 동원 가능 - 최악의 경우 50 * 50 크기의 맵을 전부 순회하는 것이므로 625,000
// 최악의 경우를 상정해도 2,000 만번 미만이므로 반복문으로 충분히 가능한 구현 - 시뮬레이션 문제

// 각각 북, 동, 남, 서 방향을 가리킴
const directionList = [0, 1, 2, 3];

// 시계 반대방향으로 90도 도는 경우 사용할 메서드
const turnToCounterclockwise = (direction) => (d+3)%4;

const developTheGame = (initLocation, gameTable) => {
  // 방문한 블록의 갯수를 기록하기 위해 변수 visitedBlock 를 선언 
  let visitedBlock = 0;

  // 전부 다 재할당이 필요하기 때문에 let 으로 선언해주었음
  let [col, row, d] = initLocation;
  // 게임 맵에 방문 여부와 육지인지 바다인지의 여부를 추가해줌
  let tableWithStatus = gameTable.map(row => {
    return row.map(arg => {
      // 바다인 경우
      if (arg === 1) {
        return { isSea: true };
        // 육지인 경우
      } return { isSea: false, isVisited: false };
    });
  });

  // 캐릭터의 초기 위치 설정 - 항상 육지라는 조건이 주어짐
  tableWithStatus[col][row].isVisited = true;
  visitedBlock ++;

  const tourTheMap = (currentCol, currentRow, currentDirection) => {
    // 만약 방향이 북쪽 혹은 남쪽이라면
    if (currentDirection % 2 === 0) {
      // 방향이 북쪽인 경우 
      if (currentDirection === 0) {
        // 현 방향에서 한 칸 앞의 블록을 기준으로 조건문을 세움  
        // 만약 그 블록이 방문한 블록이라면 
        if (tableWithStatus[currentCol][currentRow - 1].isVisited) {
          // 90도 시계 방향으로 돌고 tourTheMap 을 재귀함수로 돌림
          d = turnToCounterclockwise(d);
          currentDirection = d;
          tourTheMap(currentCol, currentRow, currentDirection);
        } 
        // 방문한 적 없는 블록이라면
        // 방문 여부를 참으로 갱신해주고, 방문한 블록의 수에 +1 을 해 준다
        // 그 다음엔 재귀함수로 돌린다
        tableWithStatus[currentCol][currentRow - 1].isVisited = true;
        visitedBlock ++;
        }

        // 방문이 남쪽인 경우
      } else if (currentDirection === 2) {

      }
    }
  }
} 