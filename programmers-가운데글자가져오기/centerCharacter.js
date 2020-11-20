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
