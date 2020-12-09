// 행과 열의 크기가 같음 
// index 를 기준으로 하여 배열 메서드를 돌려도 문제없다
const solution = (arr1, arr2) => {
    const sumOfMatrix = arr1.map((eachArr, outerIndex) => {
        return eachArr.map((element, innerIndex) => {
            return arr1[outerIndex][innerIndex] + arr2[outerIndex][innerIndex];
        });
    });
    return sumOfMatrix;
};

console.log(JSON.stringify(solution([[1,2],[2,3]], [[3,4],[5,6]])));