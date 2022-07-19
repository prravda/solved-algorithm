// [ Analysis ]
// - 단순하게 roman numeral 들을 더하면 되는 경우가 존재한다.
// - 반면
//   - 4와 9
//   - 40과 90
//   - 400과 1000
//   을 만드는 경우는 조금 다르다
// - 4를 만드는 경우, 5를 의미하는 V 앞에 I 를 넣는다 -> IV
// - 10을 만드는 경우, 10을 의미하는 X 앞에 I 를 넣는다 -> IX
// - 나머지도 이와 같은 식으로 만들어준다

// [ Process ]
// - 일단 roman numeral 들을 가져올 수 있는 ROMAN_NUMERAL 이라는 이름의 key-value table 을 만들어준다.
// - 그 다음 roman numeral 들을 순회한다
//   - 순회하면서 값을 누적해 나가는 누산기 (reducer) 연산에 가까우므로, reduce method 를 사용하기로 한다.
// - 현재의 수가 다음의 수보다 크거나 같은 roman numeral 일 경우 -> 현재 수를 누산기에 더해준다.
// - 현재의 수가 다음의 수보다 작은 roman numeral 일 경우 -> 현재 수 * -1 을 누산기에 더해준다.

const solve = (roman) => {
  const ROMAN_NUMERAL = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return [...roman].reduce((prev, curr, currentIndex, targetArray) => {
    if (currentIndex === targetArray.length - 1) {
      return prev + ROMAN_NUMERAL[curr];
    }
    if (ROMAN_NUMERAL[curr] >= ROMAN_NUMERAL[targetArray[currentIndex + 1]]) {
      return prev + ROMAN_NUMERAL[curr];
    }
    return prev - ROMAN_NUMERAL[curr];
  }, 0);
};
