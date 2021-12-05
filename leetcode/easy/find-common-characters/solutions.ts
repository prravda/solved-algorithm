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
// hash tabel 을 만드니, 2 * N^2 가 되겠지만, BIG O Notation 으로는 앞의 상수는 무시하기에...

// pseudo code
// 0. 0번째 element 의 문자열을 기준을 삼는다.
// 1. 0번째 element 의 element 를 기준으로 loop 을 돈다.
// 2 1번째 element 를 기준으로 loop 을 돈다.
// * 사실 1과 2의 순서는 큰 상관이 없다.
// 2-1. 모든 문자열을 순회하는 과정에서, 한 문자열 에서라도 해당 문자가 나오지 않았다면 continue 를 통해 다음 element 로 넘어간다.
// 2-2. 해당 문자열이 이미 이전 과정에서 탐색에 걸렸던 문자열이라면, 해당 문자열은 skip 한다.
// 3. 만약 모든 문자열에서 해당 문자가 나왔다면, return 할 배열에 push 해준다.

// 배열에서 pop() 을 해서 지워야할까? 아니면 index 기준으로 판별할까?
// index 기준으로 판별하는 게 좀 더 나을끼?
// 조회를 하는 과정이 많으니, hash table 로 만들어주어야 하나

// {
//   0: {
//     'a': 1,
//     'b': 2,
//   },
//   1: {
//     'b': 1,
//     'a': 3,
//   }
// }
// 형식의 hash object 를 만들어준다.
// 중복이 들어올 수도 있으니, 0th depth key 는 index 를 활용한 number
// 1st detph key 는 string 을 사용할 예정이다.

const createHashTable = (
  words: string[]
): { [key: number]: { [key: string]: number } } => {
  const hashedObject: { [key: number]: { [key: string]: number } } = {};
  for (let i = 0; i < words.length; i++) {
    // 접근하기 편하게 human readable 한 variable 인 currentWord 를 만들고, 그 안에 현재의 단어를 할당한다.
    const currentWord = words[i];
    // 만약 hashedObject 의 [i] 가 아직 존재하지 않는다면, 빈 객체를 할당해준다.
    if (hashedObject[i] === undefined) {
      hashedObject[i] = {};
    }
    for (let j = 0; j < currentWord.length; j++) {
      // 만약 hashedObject[i][currentWord[j]] 가 아직 존재하지 않는다면,
      if (hashedObject[i][currentWord[j]] === undefined) {
        // 1을 할당해 준 뒤, 연산을 종료한다.
        hashedObject[i][currentWord[j]] = 1;
        continue;
      }
      // 만약 hashedObject[i][currentWord[j]] 가 존재한다면,
      if (hashedObject[i][currentWord[j]]) {
        // 해당 값에 1을 더해준다.
        hashedObject[i][currentWord[j]]++;
      }
    }
  }
  // 그렇게 hashing 해 준 값을 반환한다.
  return hashedObject;
};

const commonChars = (words: string[]): string[] => {
  const hashed = createHashTable(words);
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
      // 만약, hashed 의 현재 counter + 1 (hash object 는 첫 object 부터 끝까자 다 만들었으니) 의
      // eachWord 의 값이 0이라면,
      if (hashed[counter + 1][eachCharacter] === 0) {
        // 마찬가지로 모든 word 들에 대해서 수행하는 해당 inner loop 자체를 종료시킨다.
        break;
      }
      // 그렇지 않다면, 발견이 되었다는 것이니 counter ++ 를 수행해준다.
      counter++;
    }
    // 만약 검사를 진행해야 할 나머지 모든 words 에서 특정 문자열이 발견되었다면,
    if (counter === wordsToCheck.length) {
      // hash 를 순회하면서, 해당 character 에 할당된 숫자를 -- 해준 뒤,
      for (const eachHash in hashed) {
        hashed[eachHash][eachCharacter]--;
      }
      // 해당 문자열을 commonCharacters 에 push 한다.
      commonCharacters.push(eachCharacter);
    }
  }
  // 그렇게 검산이 다 끝난 common characters 를 반환해준다.
  return commonCharacters;
};

console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['cool', 'lock', 'cook']));
