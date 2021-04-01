const solution = (num) => {
  const target = num;
  const arr = [];
  const aux = (inputNum) => {
    if (target >= inputNum) {
      arr.push(inputNum);
      aux(inputNum + 1);
    }
  }
  aux(1);

  return arr.reduce((accm, prev) => accm + prev);
}

console.log(solution(12345));