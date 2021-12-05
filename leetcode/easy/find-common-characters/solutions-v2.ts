// https://leetcode.com/problems/find-common-characters/
// string[] type 의 배열이 들어오고, 배열은 1 <= array.length <= 100 을 만족한다.
// 그리고 각 문자열은 1 <= string.length <= 100 을 만족한다.
// 이 때, 배열 안의 모든 문자열이 가지고 있는 문자(character) 들을 담아 반환하라.
// 배열에 담기는 문자열의 순서는 상관없다고 한다.

// 전략
// brute force 방법으로 접근 -> 이유는, 모든 문자열에 존재하는 문자이기 위해서는, 모든 문자열을 검사해봐야 하기 때문이다.
// 그래서, 첫 번째 문자열에 있는 문자를 기준으로 배열의 모든 문자열들을 탐색해주면 된다.

// time complexity
// 한 문자열의 길이는 100, 그리고 문자열이 담긴 배열의 길이는 100 개이다.
// 한 문자열에 있는 문자 길이만큼 모든 배열들을 순회해야 하므로 time complexity 는 100^2, 즉 N^2 이라고 할 수 있겠다.

// pseudo code
// 0. 0번째 element 의 문자열을 기준을 삼는다.
// 1. 0번째 element 의 element 를 기준으로 loop 을 돈다.
// 2 1번째 element 를 기준으로 loop 을 돈다.
// * 사실 1과 2의 순서는 큰 상관이 없다.
// 2-1. 모든 문자열을 순회하는 과정에서, 한 문자열 에서라도 해당 문자가 나오지 않았다면 continue 를 통해 다음 element 로 넘어간다.
// 2-2. 해당 문자열이 이미 이전 과정에서 탐색에 걸렸던 문자열이라면, 해당 문자열은 skip 한다.
// 3. 만약 모든 문자열에서 해당 문자가 나왔다면, return 할 배열에 push 해준다.

const commonCharacters = (words: string[]): string[] => {
  const [firstWord, ...wordsToCheck] = words;
  const commonCharacters: string[] = [];
  for (const eachCharacter of firstWord) {
    let counter = 0;
    for (const eachWord of wordsToCheck) {
      // 만약 특정 단어에 특정 문자(character)가 존재하지 않는다면
      if (eachWord.includes(eachCharacter) === false) {
        // 모든 word 들에 대해서 수행하는 해당 inner loop 자체를 종료시킨다.
        break;
      }
      // 그렇지 않다면, 발견이 되었다는 것이니 counter ++ 를 수행해준다.
      counter++;
    }
    // 만약 검사를 진행해야 할 나머지 모든 words 에서 특정 문자열이 발견되었다면,
    if (counter === wordsToCheck.length) {
      // 해당 문자열을 commonCharacters 에 push 한다.
      commonCharacters.push(eachCharacter);
    }
  }

  return commonCharacters;
};

console.log(commonCharacters(['bella', 'label', 'roller']));
console.log(commonCharacters(['cool', 'lock', 'cook']));
