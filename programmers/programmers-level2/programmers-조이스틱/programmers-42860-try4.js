const solution = (name) => {
  // index 를 찾을 알파벳 배열
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // 조이스틱 이동의 횟수를 담을 변수
  let neededMoving = 0;
  const targetName = [...name];

  // 혹시 끝자락부터 시작하는 A가 있다면 -> 끝의 A부터 그 다음 A가 연속되는 부분들까지 도려준다
  while (targetName[targetName.length - 1] === "A") {
    targetName.pop();
  }

  // 연속된 A 판별식
  const serialA = [];
  for (let i = 0; i < targetName.length; i++) {
    if (targetName[i] === "A") {
      if (serialA.length === 0) {
        serialA.push(i);
        continue;
      }
      if (serialA[serialA.length - 1] + 1 !== i) {
        break;
      }
      serialA.push(i);
    }
  }

  // 알파벳 판별식 
  for (let i = 0; i < targetName.length; i++) {
    // 알파벳이 A인 경우 -> 생략
    if (targetName[i] === "A") {
      continue;
    }

    const indexOfTargetLetter = letters.indexOf(targetName[i]);
    
    // indexOfTargetLetter > 13 인 경우 -> A -> Z -> 알파벳 으로 가는게 더 합리적
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

  // 되도는게 이득인지 앞으로 쭉 가는게 이득인지 확인하는 과정
  // 쭉 가는 게 나은 경우 -> 그냥 조이스틱을 처음부터 끝까지 움직이는 경우로 계산
  if (serialA.length === 0 || serialA[0] > serialA.length) {
    neededMoving = neededMoving + (targetName.length - 1);
    // 뒤로 도는게 나은 경우
  } else {
    neededMoving = neededMoving - serialA.length + (serialA[0] - 1);
  }
  console.log(neededMoving);
  return neededMoving;
};

// solution("JEROEN");
// solution("JAN");
// solution("BBBAA");
// solution("AABAAABA");
// solution("ABABAAAAABA"); // 11

// 예외처리: 끝부분까지 A로 이뤄진 경우가 있다면? 
solution("AAABAAAA"); // 4
solution("AAAB"); // 2

// edge case
// AAAAA
// BBBAA

연속되는 A구간을 기준으로 판단한다

핵심

뒤로 도는 경우 -> (앞의 간격 * 2) + 1 + 뒤의 간격 
쭉 가는 경우 -> 전체의 간격

const spaceCounter = (arr) => {
  if (arr.length > 1) {
    return arr.length - 1;
  }
  return 0;
};

// spaceCounter(앞의배열) + spaceCounter(뒤의배열) + 1 과 전체 배열의 길이 비교를 더 빠르게 할 수 있는법
// 즉, 뒤로 돌아서 계산하면 이득인지 아닌지 판단하는 법은? 수학적으로 더욱 간단하게!

const solution = (name) => {
  const tempStack = [];
  const allCaseOfCursorMoving = [];
  let neededCursorMoving = 0;
  for (let i = 0; i < name.length; i++) {
    while (name[i] === "A") {
      // A가 처음 나온다면 -> 집어넣고 연산을 마무리한다
      if (tempStack.length === 0) {
        tempStack.push(i);
        continue;
      }
      // 연속으로 A가 나오는 경우 -> 그냥 집어넣는다
      if (tempStack[tempStack.length - 1] + 1 === i) {
        tempStack.push(i);
        // 연속으로 A가 나오다가 끊긴 경우
      } else {
        const caseOfBackWard = spaceCounter(name.slice(0, (tempStack[0] + 1))) + spaceCounter(name.slice(tempStack[tempStack.length - 1])) + 1;
        const allCaseOfCursorMoving = name.length - 1;
      }
    }
  }
}