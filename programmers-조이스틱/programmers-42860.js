const solution = (name) => {
  // index 를 참고할 수 있도록 letters 라는 배열에 대문자를 다 넣어줌 
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // 배열로 참고하기 편하게 이름을 spread operator 로 잘라줌
  const targetName = [...name];

  let neededMoving = 0;
  let neededCursorMovingTillFirstA = 0;
  let neededCursorMovingTillLastA = 0;

  /**
   * 고려해야 하는 상황
   * A가 나오는 경우 어떻게 해야하는가? -> 커서를 왼쪽으로 할지 오른쪽으로 할지 뭐가 더 합리적인지 기준을 찾자
   * 알파벳을 어떻게 만들어야 하는가? -> 다음 알파벳으로 움직일지 이전 알파벳으로 움직일지 뭐가 더 합리적인지 기준을 찾자
   */

  // A 가 처음 등장하는 위치를 구한다
  const indexOfLetterA = targetName.indexOf("A");
  // A 가 마지막으로 등장하는 위치도 구한다
  const lastIndexOfLetterA = targetName.lastIndexOf("A");

  // A가 존재하는 경우
  if (indexOfLetterA !== -1) {
    // A의 위치에 따른 판별식 -> A 의 첫 등장이 문자열의 중간 index, 혹은 그 이전이라면 A 직전까지 처리 후 뒤로 도는게 더 합리적
    if (indexOfLetterA <= Math.floor(targetName.length / 2)) {
      neededCursorMovingTillFirstA = neededCursorMovingTillFirstA + (indexOfLetterA - 1) * 2;
    }
  
    // A의 위치에 따른 판별식 -> A 의 첫 등장이 문자열의 중간 index 이후라면 A를 무시하고 그냥 쭉 가는게 더 합리적
    if (indexOfLetterA > Math.floor(targetName.length / 2)) {
      neededCursorMovingTillFirstA = neededCursorMovingTillFirstA + indexOfLetterA;
    }
  
    // A 의 연속성에 따른 판별식 -> A가 연속으로 나온다면(1개만 나오는 경우도 포함)  
    if ([...targetName].slice(indexOfLetterA, (lastIndexOfLetterA + 1)).every(arg => arg === "A")) {
      neededCursorMovingTillLastA = neededCursorMovingTillLastA + 1
    }
  }
  // A가 존재하지 않는 경우 -> 이름의 길이 - 1 만큼 커서 이동을 하고 A와 관련된 것이 아니니 neededMoving 에 직접 더해줌
  neededMoving = neededMoving + (targetName.length - 1);

  for (const targetLetter of targetName) {
    // 알파벳 판별식 
    // indexOfTargetLetter > 13 인 경우 -> A -> Z -> 알파벳 으로 가는게 더 합리적
    const indexOfTargetLetter = letters.indexOf(targetLetter);

    if (indexOfTargetLetter > 13) {
      neededMoving = neededMoving + (26 - indexOfTargetLetter);
      continue;
    }
    // indexOfTargetLetter <= 13 인 경우 -> A -> 알파벳 으로 가는게 더 합리적
    // indexOfTargetLetter === 13 인 경우 -> 어떻게 가든 상관없기에 위의 경우에 추가함 
    if (indexOfTargetLetter <= 13) {
      neededMoving = neededMoving + indexOfTargetLetter;
      continue;
    }
  }

  console.log(neededMoving);
};

solution("JEROEN");