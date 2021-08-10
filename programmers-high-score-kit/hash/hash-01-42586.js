// 문제명: 기능개발
// 주소 https://programmers.co.kr/learn/courses/30/lessons/42586

/**
 * [ 문제 파악 ]
 * 기능별 진척도가 담긴 number[] 형태의 배열이 하나,
 * 그리고 기능별 하루 작업진행량이 담긴 number[] 형태의 배열이 하나가 주어진다.
 * 어떤 기능이 배포되기 위해서는 그 기능 앞의 모든 기능이 배포되어야 한다.
 *
 * [ 시간복잡도 파악 ]
 * 각 배열의 길이는 전부 100개 미만이다.
 * 100^3 === 1000000 을 해도 100만이니, time complexity 는 그렇게 constarint 는 아닌 셈
 *
 * [ 문제 해결전략 ]
 * (100 - progresses[0]) / speeds[0] 의 값을 구한다 (작업 소요일, set it's name as neededTime)
 * deployedTask 라는 constant array type variable 을 선언하고, [] 를 할당한다.
 * finishedTask 라는 let variable 을 할당하고, 그 값이 1을 더한다 (일단 하나의 progress 는 종료되었으니깐)
 * 그리고 neededTime * speeds[나머지 index들] 이 100이 넘어가는지를 앞에서부터 확인한다
 * 100이 넘어갈 때마다 finishedTask ++ 를 해 주고, 더 이상 넘어가지 않는 경우엔 deployedTask.push(finishedTask) 를 한다
 *
 * processes.length === 0 이 될 때까지 위의 과정을 반복한다.
 */

function solution(progresses, speeds) {
  let copiedProgresses = [...progresses];
  let copiedSpeeds = [...speeds];
  const deployedTasksPerDay = [];
  while (copiedProgresses.length > 0) {
    let finishedTask = 0;
    let neededTime = Math.ceil((100 - copiedProgresses[0]) / copiedSpeeds[0]);
    copiedProgresses = copiedProgresses.map(
      (eachProgress, index) => eachProgress + copiedSpeeds[index] * neededTime
    );
    while (copiedProgresses[0] >= 100) {
      finishedTask++;
      copiedProgresses.shift();
      copiedSpeeds.shift();
    }
    deployedTasksPerDay.push(finishedTask);
  }
  return deployedTasksPerDay;
}

solution([93, 30, 55], [1, 30, 5]);
