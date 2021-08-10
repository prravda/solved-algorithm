const solution = (name) => {
  // index 를 참고할 수 있도록 letters 라는 배열에 대문자를 다 넣어줌 
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // 배열로 참고하기 편하게 이름을 spread operator 로 잘라줌
  const targetName = [...name];

  // 알파벳 판별식 
  for (let i = 0; i < targetName.length; i++) {
    // 알파벳이 A인 경우
    if (targetName[i] === "A") {

    }

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

const serialA = [];
const exceptSerialA = [];
let neededMoving = 0;
for (let i = 0; i < targetName.length; i++) {
  if (targetName[i] === "A") {
    if (serialA.length === 0) {
      serialA.push(i);
      continue;
    }
    if (serialA[serialA.length - 1] + 1 === i) {
      serialA.push(i);
      continue;
    }
  }
  exceptSerialA.push(targetName[i]);
}

console.log(serialA);
console.log(exceptSerialA);