const solution = (name) => {
  // index 를 참고할 수 있도록 letters 라는 배열에 대문자를 다 넣어줌 
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // 배열로 참고하기 편하게 이름을 spread operator 로 잘라줌
  const targetName = [...name];

  let neededMoving = 0;
  let neededCursorMoving = 0;
  
  /**
   * 고려해야 하는 상황
   * A가 나오는 경우 어떻게 해야하는가? -> 커서를 왼쪽으로 할지 오른쪽으로 할지 뭐가 더 합리적인지 기준을 찾자
   * 알파벳을 어떻게 만들어야 하는가? -> 다음 알파벳으로 움직일지 이전 알파벳으로 움직일지 뭐가 더 합리적인지 기준을 찾자
   */

  // A 가 처음 등장하는 위치를 구한다
  const indexOfLetterA = targetName.indexOf("A");
  // A 가 마지막으로 등장하는 위치도 구한다
  const lastIndexOfLetterA = targetName.lastIndexOf("A");

  // 만약 A가 존재하고, A가 처음 나오는 구간부터 A가 마지막으로 등장하는 구간까지 전부 A로 채워져 있다면
  if (indexOfLetterA !== -1 && targetName.slice(indexOfLetterA, (lastIndexOfLetterA + 1)).every(arg => arg === "A")) {
    if (indexOfLetterA <= 1) {
      neededCursorMoving = neededCursorMoving + 1 + (targetName.length - lastIndexOfLetterA - 1);
    } else {
      neededCursorMoving = neededCursorMoving + (indexOfLetterA - 1) * 2 + (targetName.length - lastIndexOfLetterA - 1);
    }
  } else {
    // 위의 조건 중 하나라도 해당이 되지 않는다면 -> 그냥 처음부터 쭉 도나 뒤를 찍고 도나 똑같음
    neededCursorMoving = neededCursorMoving + (targetName.length - 1);
  }

  for (let i = 0; i < targetName.length; i++) {
    // 알파벳 판별식 
    // indexOfTargetLetter > 13 인 경우 -> A -> Z -> 알파벳 으로 가는게 더 합리적
    const indexOfTargetLetter = letters.indexOf(targetName[i]);

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
  console.log(neededMoving + neededCursorMoving);
  return neededMoving + neededCursorMoving;
};

// solution("JEROEN");
// solution("JAN");
solution("BBBAA");

// edge case
// AAAAA
// BBBAA
