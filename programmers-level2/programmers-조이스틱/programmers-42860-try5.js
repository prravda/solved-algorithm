// 연속되는 A가 몇개 이상 나온다면 


const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const letterModifier = (letter) => {
  if (letter === "A") {
    return 0;
  }
  const indexOfTargetLetter = letters.indexOf(letter);
  
  // indexOfTargetLetter > 13 인 경우 -> A -> Z -> 알파벳 으로 가는게 더 합리적
  if (indexOfTargetLetter > 13) {
    return 26 - indexOfTargetLetter;
  }
  
  // indexOfTargetLetter <= 13 인 경우 -> A -> 알파벳 으로 가는게 더 합리적
  // indexOfTargetLetter === 13 인 경우 -> 어떻게 가든 상관없기에 위의 경우에 추가함 
  if (indexOfTargetLetter <= 13) {
    return indexOfTargetLetter;
  }
}

const spaceCounter = (arr) => {
  if (arr.length > 1) {
    return arr.length - 1;
  }
  return 0;
};

const solution = (name) => {
  
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