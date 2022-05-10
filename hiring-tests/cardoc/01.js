function recursiveHelper(array, tryNumber, accumulatedCases) {
  if (tryNumber > array.length) {
    return accumulatedCases;
  }
  const copiedArray = [...array];
  const lastElement = copiedArray.pop();
  const movedArray = [lastElement, ...copiedArray];
  return recursiveHelper(movedArray, tryNumber + 1, [
    ...accumulatedCases,
    movedArray,
  ]);
}

function solution(arrA, arrB) {
  const totalCases = recursiveHelper(arrA, 1, []);
  for (const eachCase of totalCases) {
    if (eachCase.every((value, index) => value === arrB[index])) {
      return true;
    }
  }
  return false;
}
