const factorialWithIteration = (targetNum) => {
  let accm = 0;
  for (let i = 1; i <= targetNum; i++) {
    accm = accm + i;
  }
  return accm;
};

// 점화식을 생각하자 = Xn = Xn + @...
const factorialWithRecursion = (targetNum) => {
  if (targetNum <= 1) {
    return targetNum;
  }
  return targetNum + factorialWithRecursion(targetNum - 1);
};

console.log(factorialWithIteration(10));
console.log(factorialWithRecursion(10));