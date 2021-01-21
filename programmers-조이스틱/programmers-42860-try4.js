const solution = (name) => {
  // index 를 찾을 알파벳 배열
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // 조이스틱 이동의 횟수를 담을 변수
  let neededMoving = 0;

  // 연속된 A 판별식
  const serialA = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i] === "A") {
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
  for (let i = 0; i < name.length; i++) {
    // 알파벳이 A인 경우 -> 생략
    if (name[i] === "A") {
      continue;
    }

    const indexOfTargetLetter = letters.indexOf(name[i]);
    
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
    neededMoving = neededMoving + (name.length - 1);
    // 뒤로 도는게 나은 경우
  } else {
    neededMoving = neededMoving - serialA.length + (serialA[0] - 1);
  }
  console.log(neededMoving);
  return neededMoving;
};

// solution("JEROEN");
solution("JAN");
// solution("BBBAA");
// solution("AABAAABA");

// edge case
// AAAAA
// BBBAA

