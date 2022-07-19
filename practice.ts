// parser code for siwoon school web page

// const lessonTimeList = [...document.getElementsByClassName('time')].slice(1).map(e => {
//   const [min, secWithKor] = e.innerText.split('분 ');
//   const [sec, misc] = secWithKor.split('초');
//   return {
//       minute: Number(min),
//       second: Number(sec),
//   };
// })

// const toHumanReadableFormat = (totalSec) => {
// const unitOfTime = {
//   hour: 60 ** 2,
//   minute: 60,
// };

// const hour = Math.floor(totalSec / unitOfTime.hour);
// const minute = Math.floor(
//   (totalSec - unitOfTime.hour * hour) / unitOfTime.minute
// );
// const sec = totalSec - hour * unitOfTime.hour - minute * unitOfTime.minute;

// return `${hour}h / ${minute}m / ${sec}s`;
// };

// const timeAccm = (minAndSecArr) => {
// const totalSec = minAndSecArr.reduce((prev, current) => {
//   return prev + current.minute * 60 + current.second;
// }, 0);

// return toHumanReadableFormat(totalSec);
// };

// timeAccm(lessonTimeList);

interface minAndSec {
  minute: number;
  second: number;
}

// Kor: 러시아어 왕초보 탈출 1탄
const stepByStepPartOne: minAndSec[] = [
  // 연습 강의 목록들은 주석처리
  // { minute: 7, second: 5 },
  // { minute: 21, second: 36 },
  // { minute: 18, second: 57 },
  // { minute: 22, second: 24 },
  // { minute: 18, second: 20 },
  // { minute: 11, second: 25 },
  { minute: 15, second: 46 },
  { minute: 20, second: 40 },
  { minute: 17, second: 56 },
  { minute: 26, second: 8 },
  { minute: 20, second: 52 },
  { minute: 19, second: 25 },
  { minute: 23, second: 18 },
  { minute: 24, second: 47 },
  { minute: 21, second: 56 },
  { minute: 25, second: 31 },
  { minute: 23, second: 14 },
  { minute: 26, second: 22 },
  { minute: 19, second: 45 },
  { minute: 22, second: 52 },
  { minute: 24, second: 24 },
  { minute: 24, second: 27 },
  { minute: 22, second: 48 },
  { minute: 21, second: 0 },
  { minute: 19, second: 54 },
  { minute: 24, second: 9 },
  { minute: 22, second: 49 },
  { minute: 20, second: 15 },
  { minute: 20, second: 53 },
  { minute: 23, second: 6 },
];

// Kor: 러시아어 왕초보 탈출 2탄
const stepByStepPartTwo: minAndSec[] = [
  { minute: 5, second: 41 },
  { minute: 18, second: 43 },
  { minute: 14, second: 45 },
  { minute: 17, second: 0 },
  { minute: 10, second: 39 },
  { minute: 15, second: 55 },
  { minute: 19, second: 20 },
  { minute: 20, second: 32 },
  { minute: 19, second: 1 },
  { minute: 18, second: 35 },
  { minute: 23, second: 18 },
  { minute: 19, second: 5 },
  { minute: 21, second: 38 },
  { minute: 19, second: 3 },
  { minute: 20, second: 54 },
  { minute: 19, second: 40 },
  { minute: 20, second: 9 },
  { minute: 21, second: 36 },
  { minute: 25, second: 35 },
  { minute: 21, second: 19 },
  { minute: 18, second: 57 },
  { minute: 19, second: 50 },
  { minute: 22, second: 31 },
  { minute: 18, second: 5 },
  { minute: 19, second: 47 },
  { minute: 19, second: 49 },
  { minute: 23, second: 27 },
  { minute: 22, second: 23 },
  { minute: 19, second: 37 },
  { minute: 21, second: 38 },
];

// Kor: 러시아어 왕초보 탈출 3탄
const stepByStepPartThree: minAndSec[] = [
  { minute: 5, second: 39 },
  { minute: 16, second: 37 },
  { minute: 13, second: 25 },
  { minute: 17, second: 10 },
  { minute: 17, second: 36 },
  { minute: 17, second: 43 },
  { minute: 20, second: 6 },
  { minute: 18, second: 1 },
  { minute: 19, second: 38 },
  { minute: 21, second: 24 },
  { minute: 19, second: 0 },
  { minute: 17, second: 13 },
  { minute: 20, second: 5 },
  { minute: 19, second: 8 },
  { minute: 19, second: 46 },
  { minute: 18, second: 16 },
  { minute: 18, second: 3 },
  { minute: 18, second: 38 },
  { minute: 18, second: 59 },
  { minute: 18, second: 14 },
  { minute: 19, second: 59 },
  { minute: 18, second: 53 },
  { minute: 18, second: 41 },
  { minute: 18, second: 14 },
  { minute: 17, second: 32 },
  { minute: 20, second: 50 },
  { minute: 21, second: 22 },
  { minute: 17, second: 23 },
  { minute: 20, second: 46 },
  { minute: 23, second: 21 },
];

const toHumanReadableFormat = (totalSec: number): string => {
  const unitOfTime = {
    hour: 60 ** 2,
    minute: 60,
  };

  const hour = Math.floor(totalSec / unitOfTime.hour);
  const minute = Math.floor(
    (totalSec - unitOfTime.hour * hour) / unitOfTime.minute
  );
  const sec = totalSec - hour * unitOfTime.hour - minute * unitOfTime.minute;

  return `${hour}h / ${minute}m / ${sec}s`;
};

const timeAccm = (minAndSecArr: minAndSec[]): string => {
  const totalSec = minAndSecArr.reduce((prev, current) => {
    return prev + current.minute * 60 + current.second;
  }, 0);

  return toHumanReadableFormat(totalSec);
};

const extractLessonWithHumanReadableOrder = (
  lessonTimeList: minAndSec[],
  humanReadableFrom: number,
  humanReadableTo: number
) => {
  return lessonTimeList.slice(humanReadableFrom - 1, humanReadableTo - 1);
};

// caculate the total time of the lesson with from and to
// 몇 강부터 몇 강까지 걸리는 강의 시간을 계산한다
console.log(
  timeAccm(extractLessonWithHumanReadableOrder(stepByStepPartOne, 1, 9))
);
