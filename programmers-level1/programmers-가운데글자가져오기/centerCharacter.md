# programmers-가운데 글자 가져오기

---

# 문제

[코딩테스트 연습 - 가운데 글자 가져오기](https://programmers.co.kr/learn/courses/30/lessons/12903)

# 조건 정리

1. 주어진 단어 `s` 의 가운데 글자를 반환하라
    1. 만약 s 의 길이가 짝수라면 → 가운데 두 글자를 반환하라
    2. 만약 s 의 길이가 홀수라면 → 가운데 한 글자를 반환하라
2. 주어지는 단어의 길이는 1 이상 100 이하의 `string` 타입이다 

# 의사 코드 작성

1. `s` 의 길이가 짝수인지 홀수인지 판별한다 → `s.length` 를 이용한다, 짝수는 2로 나누었을 때 나머지가 0인 수를 의미하므로, `s.length%2 === 0` 인지를 통해 짝수/홀수를 판별할 수 있다.
    1. 짝수라면 → 가운데 두 글자를 반환한다 → 예를 들어 길이가 4개인 문자열 char, `'abcd'` 의 가운데 두 개를 가져오기 위해서는 `'bc'` 를 가져오면 된다. index 로 치면 "길이 / 2" 번째의 index character 와 "길이 / 2 - 1" 번째의 index character  를 가져오면 된다. 문자열을 합치는 과정은 JS 의 경우 문자 + 문자인 경우 문자를 이어붙일 수 있기 때문에  `char[s.length/2-1] + char[s.length/2]` 로 간단하게 표기해준다. 
    2. 홀수라면 → 가운데 한 글자를 반환한다 → 예를 들어 길이가 3개인 문자열 char2, `'abc'` 의 가운데 한 개를 가져오기 위해서는 `'b'` 를 가져오면 된다. index 로 치면 "길이 / 2 의 버림값" 의 index character 를 가져오면 된다. 

# 실제 코드 작성

```jsx
function solution(s) {
	var answer = '';
	// 1개짜리 문자가 들어오는 경우     
	if (s.length === 1) {
	    answer = s;
	} // 문자의 갯수가 짝수인 경우 
	else if (s.length % 2 === 0) {
	    answer = s[s.length/2 - 1] + s[s.length/2];
	// 문자의 갯수가 홀수인 경우
	} else {
	    answer = s[Math.floor(s.length/2)];
	}
	return answer;
}

```