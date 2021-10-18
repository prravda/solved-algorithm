// array for cardinal
const cardinals = [0, 1, 2, 3];
// enum for cardinal - more human readable
enum CARDINAL_ENUM {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

const moveToLeft = (currentCardinal: number): number => {
  // if currentCardinal is smaller than 0 or larger or same than cardinal array's length
  if (currentCardinal < 0 || currentCardinal > 3) {
    throw new Error('invalid current index value');
  }
  const currentCardinalIndex = cardinals.indexOf(currentCardinal);
  const cardinalAfterMovedToLeft = currentCardinalIndex - 1;

  // if index move to left is smaller than 0
  // return the last element of cardinal array
  if (cardinalAfterMovedToLeft < 0) {
    return cardinals[cardinals.length - 1];
  }

  // else, return cardinal[cardinalAfterMovedToLeft]
  return cardinals[currentCardinalIndex];
};

const moveToBack = (currentCardinal: number) => {
  // if currentCardinal is smaller than 0 or larger or same than cardinal array's length
  if (currentCardinal < 0 || currentCardinal > 3) {
    throw new Error('invalid current index value');
  }
  const currentCardinalIndex = cardinals.indexOf(currentCardinal);
  const indexAfterMovedToBack = currentCardinalIndex + 2;

  // if indexAfterMovedToBack is larger than cardinals array's last index
  // return indexAfterMovedToBack - 4
  if (indexAfterMovedToBack > cardinals.length - 1) {
    return indexAfterMovedToBack - 4;
  }

  // else, return cardinal[cardinalAfterMovedToLeft]
  return cardinals[currentCardinalIndex];
};

const moveToOneBlockToFrontBasedOnCurrentCardinal = (
  location: number[],
  cardinal: number
): number[] => {
  if (location.length !== 2) {
    throw new Error('invalid location: check length again');
  }
  let [currentColumn, currentRow] = location;

  switch (cardinal as CARDINAL_ENUM) {
    case CARDINAL_ENUM.NORTH:
      currentRow -= 1;
      break;
    case CARDINAL_ENUM.EAST:
      currentColumn += 1;
      break;
    case CARDINAL_ENUM.SOUTH:
      currentRow += 1;
      break;
    case CARDINAL_ENUM.WEST:
      currentColumn -= 1;
      break;
  }
  return [currentColumn, currentRow];
};

const solution = (
  informationOfMap: number[][],
  location: number[],
  cardinal: number
) => {
  // variable for reference and count
  let count = 0;
  let counterForAvailableRouteBasedOnCardinal = 0;
  let [currentColumn, currentRow] = location;
  let currentCardinal = cardinal;

  while (true) {
    // if all cases are invalid, go back
    if (counterForAvailableRouteBasedOnCardinal === 4) {
      // 방향을 유지한 채로 뒤로 1칸 감
      //   만약 해당 경우가 바다라 뒤로 갈 수 없는 경우엔 움직임을 멈추고 반환
      if (someCondition) {
        break;
      }
      //   바다가 아니라면, loop 다시 시작
    }

    // start with turn left
    currentCardinal = moveToLeft(currentCardinal);
    // move to front based on this cardinal
    const [columnAfterMove, rowAfterMove] =
      moveToOneBlockToFrontBasedOnCurrentCardinal(
        [currentColumn, currentRow],
        currentCardinal
      );
    // if location is already visited location or sea
    // change only cardinal, and skip this loop
    if (informationOfMap[columnAfterMove][rowAfterMove] === 1) {
      counterForAvailableRouteBasedOnCardinal++;
      continue;
    }
    // if location is not sea and never visited location
    // - reset available route to 0
    // - update current column and row
    // - change this location of map to 1
    currentColumn = columnAfterMove;
    currentRow = rowAfterMove;
    counterForAvailableRouteBasedOnCardinal = 0;
    informationOfMap[currentColumn][currentRow] = 1;
  }

  return count;
};
