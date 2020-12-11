// initLocation: 캐릭터의 위치(좌표계) 와 캐릭터가 바라보는 방향을 담음 (array)
// gameTable: 육지 혹은 바다 여부가 표시된 배열을 return 
// 제한시간 1초이므로 2,000만번의 연산 동원 가능 - 최악의 경우 50 * 50 크기의 맵을 전부 순회하는 것이므로 625,000
// 최악의 경우를 상정해도 2,000 만번 미만이므로 반복문으로 충분히 가능한 구현 - 시뮬레이션 문제

// 참고용 주석: 각각 북, 동, 남, 서 방향을 가리킴
// const directionList = [0, 1, 2, 3];

// 시계 반대방향으로 90도 도는 경우 사용할 메서드
const turnToCounterclockwise = (direction) => (direction + 3) % 4;

const developTheGame = (initLocation, gameTable) => {
  // 방문한 블록의 갯수를 기록하기 위해 변수 visitedBlock 를 선언 
  let visitedBlock = 1;

  // 전부 다 재할당이 필요하기 때문에 let 으로 선언해주었음
  let [row, col, d] = initLocation;
  // 게임 맵에 방문 여부와 육지인지 바다인지의 여부를 추가해줌
  let tableWithStatus = gameTable.map(row => {
    return row.map(arg => {
      // 바다인 경우
      if (arg === 1) {
        return { isSea: true, isVisited: true };
        // 육지인 경우
      } return { isSea: false, isVisited: false };
    });
  });

  let rowMax = tableWithStatus.length;
  let colMax = tableWithStatus[0].length;

  // 영역을 순회하는 closure 함수 작성
  const tourTheMap = (currentCol, currentRow, currentDirection) => {
    // 둘러싸고 있는 네 방향의 영역이 전부 방문했던 블록이거나, 전부 바다인 경우
    if (
      // 현 위치를 기준으로 동쪽의 앞 영역이 방문할 수 없는 영역이거나, 방문했던 영역이거나 바다인 경우
      ((currentCol + 1) > colMax || tableWithStatus[currentRow][currentCol + 1].isVisited || tableWithStatus[currentRow][currentCol + 1].isSea) &&
      // 현 위치를 기준으로 서쪽의 앞 영역이 방문할 수 없는 영역이거나, 방문했던 영역이거나 바다인 경우
      ((currentCol - 1) < 0 || tableWithStatus[currentRow][currentCol - 1].isVisited || tableWithStatus[currentRow][currentCol - 1].isSea) &&
      // 현 위치를 기준으로 남쪽의 앞 영역이 방문할 수 없는 영역이거나, 방문했던 영역이거나 바다인 경우
      ((currentRow + 1) > rowMax || tableWithStatus[currentRow + 1][currentCol].isVisited || tableWithStatus[currentRow + 1][currentCol].isSea) &&
      // 현 위치를 기준으로 북쪽의 앞 영역이 방문할 수 없는 영역이거나, 방문했던 영역이거나 바다인 경우
      ((currentRow - 1) < 0 || tableWithStatus[currentRow - 1][currentCol].isVisited || tableWithStatus[currentRow - 1][currentCol].isSea)
    ) {
      // 동쪽의 경우
      if (currentDirection === 1) {
        // 만약 후진한 칸이 바다라면
        if (tableWithStatus[currentCol - 1][currentRow].isSea) {
          // 함수를 종료한다
          return;
        }
        // 바다가 아니라면 후진하고 위치를 갱신한 뒤 재귀를 걸어준다
        currentCol = currentCol - 1;
        col = currentCol;
        tourTheMap(currentCol, currentRow, currentDirection); 
      }

      // 서쪽의 경우
      if (currentDirection === 3) {
        // 만약 후진한 칸이 바다라면
        if (tableWithStatus[currentCol + 1][currentRow].isSea) {
          // 함수를 종료한다
          return;
        }
        // 바다가 아니라면 후진하고 위치를 갱신한 뒤 재귀를 걸어준다
        currentCol = currentCol + 1;
        col = currentCol;
        tourTheMap(currentCol, currentRow, currentDirection); 
      }

      // 남쪽의 경우
      if (currentDirection === 2) {
        // 만약 후진한 칸이 바다라면
        if (tableWithStatus[currentCol][currentRow - 1].isSea) {
          // 함수를 종료한다
          return;
        }
        // 바다가 아니라면 후진하고 위치를 갱신한 뒤 재귀를 걸어준다
        currentRow = currentRow - 1;
        row = currentRow;
        tourTheMap(currentCol, currentRow, currentDirection); 
      }

      // 북쪽의 경우
      if (currentDirection === 0) {
        // 만약 후진한 칸이 바다라면
        if (tableWithStatus[currentCol][currentRow + 1].isSea) {
          // 함수를 종료한다
          return;
        }
        // 바다가 아니라면 후진하고 위치를 갱신한 뒤 재귀를 걸어준다
        currentRow = currentRow + 1;
        row = currentRow;
        tourTheMap(currentCol, currentRow, currentDirection); 
      }
    }
    
    // 위의 경우가 아니라 순회가 가능한 경우
    // 만약 방향이 북쪽 혹은 남쪽이라면
    if (currentDirection % 2 === 0) {

      // 방향이 북쪽인 경우 
      if (currentDirection === 0) {
        // 현 방향에서 한 칸 앞의 블록을 기준으로 조건문을 세움  
        // 만약 그 블록이 방문한 블록, 혹은 방문할 수 없는 블록이라면
        if ((currentRow - 1) < 0 || tableWithStatus[currentRow - 1][currentCol].isVisited || tableWithStatus[currentRow - 1][currentCol].isSea) {
          // 90도 시계 방향으로 돌고 tourTheMap 을 재귀함수로 돌림
          d = turnToCounterclockwise(d);
          currentDirection = d;
          tourTheMap(currentCol, currentRow, currentDirection);
        } 
        // 방문한 적 없는 블록이라면
        // 방문 여부를 참으로 갱신해주고, 방문한 블록의 수에 +1 을 해 준다
        tableWithStatus[currentCol][currentRow - 1].isVisited = true;
        visitedBlock ++;

        // 캐릭터의 현 위치와 방향을 갱신한다
        d = turnToCounterclockwise(d);
        currentDirection = d;
        currentRow = currentRow - 1;
        row = currentRow;

        // 그 다음엔 재귀함수로 돌린다
        tourTheMap(currentCol, currentRow, currentDirection);
      }
      
      // 방향이 남쪽인 경우 
      else if (currentDirection == 2) {
        // 현 방향에서 한 칸 앞의 블록을 기준으로 조건문을 세움  
        // 만약 그 블록이 방문한 블록, 혹은 방문할 수 없는 블록이라면
        if ((currentRow + 1) > rowMax || tableWithStatus[currentRow + 1][currentCol].isVisited || tableWithStatus[currentRow + 1][currentCol].isSea) {
          // 90도 시계 방향으로 돌고 tourTheMap 을 재귀함수로 돌림
          d = turnToCounterclockwise(d);
          currentDirection = d;
          tourTheMap(currentCol, currentRow, currentDirection);
        } 
        // 방문한 적 없는 블록이라면
        // 방문 여부를 참으로 갱신해주고, 방문한 블록의 수에 +1 을 해 준다
        tableWithStatus[currentCol + 1][currentRow].isVisited = true;
        visitedBlock ++;
        
        // 캐릭터의 현 위치와 방향을 갱신한다
        d = turnToCounterclockwise(d);
        currentDirection = d;
        currentCol = currentCol + 1;
        row = currentRow;
  
        // 그 다음엔 재귀함수로 돌린다
        tourTheMap(currentCol, currentRow, currentDirection);
      }
    }

    // 만약 방향이 동쪽 혹은 서쪽이라면
    if (currentDirection % 2 !== 0) {
        
      // 방향이 동쪽인 경우 
      if (currentDirection === 1) {
        // 현 방향에서 한 칸 앞의 블록을 기준으로 조건문을 세움  
        // 만약 그 블록이 방문한 블록, 혹은 방문할 수 없는 블록이라면 
        if ((currentCol + 1) > colMax || tableWithStatus[currentRow][currentCol + 1].isVisited || tableWithStatus[currentRow][currentCol + 1].isSea) {
          // 90도 시계 방향으로 돌고 tourTheMap 을 재귀함수로 돌림
          d = turnToCounterclockwise(d);
          currentDirection = d;
          tourTheMap(currentCol, currentRow, currentDirection);
        } 
        // 방문한 적 없는 블록이라면
        // 방문 여부를 참으로 갱신해주고, 방문한 블록의 수에 +1 을 해 준다
        tableWithStatus[currentCol + 1][currentRow].isVisited = true;
        visitedBlock ++;
  
        // 캐릭터의 현 위치와 방향을 갱신한다
        d = turnToCounterclockwise(d);
        currentDirection = d;
        currentCol = currentCol + 1;
        col = currentCol;
  
        // 그 다음엔 재귀함수로 돌린다
        tourTheMap(currentCol, currentRow, currentDirection);
      }
      
      // 방향이 서쪽인 경우 
      else if (currentDirection == 3) {
        // 현 방향에서 한 칸 앞의 블록을 기준으로 조건문을 세움  
        // 만약 그 블록이 방문한 블록, 혹은 바다, 혹은 범위에서 벗어나 방문할 수 없는 블록이라면
        if ((currentCol - 1) < 0 || tableWithStatus[currentRow][currentCol - 1].isVisited || tableWithStatus[currentRow][currentCol - 1].isSea) {
          // 90도 시계 방향으로 돌고 tourTheMap 을 재귀함수로 돌림
          d = turnToCounterclockwise(d);
          currentDirection = d;
          tourTheMap(currentCol, currentRow, currentDirection);
        } 
        // 방문한 적 없는 블록이라면
        // 방문 여부를 참으로 갱신해주고, 방문한 블록의 수에 +1 을 해 준다
        tableWithStatus[currentCol - 1][currentRow].isVisited = true;
        visitedBlock ++;
        
        // 캐릭터의 현 위치와 방향을 갱신한다
        d = turnToCounterclockwise(d);
        currentDirection = d;
        currentCol = currentCol - 1;
        col = currentCol;
  
        // 그 다음엔 재귀함수로 돌린다
        tourTheMap(currentCol, currentRow, currentDirection);
      }
    }
  }

  // 시작 지점은 일단은 방문한 것은 사실이기 때문에, isVisited 에 true 를 할당해준다
  tableWithStatus[col][row].isVisited = true;
  // tourTheMap 함수를 실행하여 게임의 맵을 순회한다
  tourTheMap(col, row, d);

  // closure 함수 tourTheMap 이 종료된 경우, visitedBlock 을 return 함
  return visitedBlock;
};

const startLocation = [1, 1, 0];
const tableInfo = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

console.log(developTheGame(startLocation, tableInfo));