// 일정한 수 n 을 입력받아 n에서부터 1까지의 모든 수의 곱인 팩토리얼(factorial) 값을 반환하는 함수

// 재귀함수 버전
// 유의사항이 있다면, 재귀함수 자체를 return 해주어야 한다는 점이다. 
const factorialWithRecursion = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * factorialWithRecursion(n-1);
}

console.log(factorialWithRecursion(5));


// 반복문 버전
// 일정한 수 n 을 입력받아 n에서부터 1까지의 모든 수의 곱인 팩토리얼(factorial) 값을 반환하는 함수 
const factorialWithLoop = (n) => {
  let returnValue = 1;
  for (let i = 1; i <= n; i++) {
    returnValue = returnValue * i;
  }
  return returnValue;
}

console.log(factorialWithLoop(5));