/**
 * 윤호님의 로직
 * n이 0이 될 때까지 3으로 나누는 과정을 사용
 * 재귀 알고리즘을 사용하여 
 */

let counter = 0;
function solution(n) {
    var answer = ''; 
    let fourOneTwo = [4,1,2]
    
    let aux = (n)=>{ 
        counter ++;
        if(n == 0){
            return
        }
        answer = fourOneTwo[n%3]+answer
        if(Math.floor(n%3 === 0)){
            aux(Math.floor(n/3)-1)
        }else{
            aux(Math.floor(n/3))
        }
    }
    aux(n) 
    
    return [counter, answer];
}

console.log(solution(500000000));

