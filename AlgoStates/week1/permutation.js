// from: https://javascript.plainenglish.io/how-to-solve-permutations-in-javascript-502cc4522482
const permutateBacktrack = (arrOfArgs) => {
  const results = [];

  const backTracker = (args, tempArr) => {
    if (tempArr.length === arrOfArgs.length) {
      results.push([...tempArr]);
    }

    args.forEach(arg => {
      if (!tempArr.includes(arg)) {
        tempArr.push(arg);
        backTracker(args, tempArr);
        tempArr.pop();
      }
    });
  }

  backTracker(arrOfArgs, []);
  return results;
}
// permutateBacktrack(['A', 'B', 'C', 'D']);

function gfgPermutation(S) {
  const strToArr = [...S];
  const results = [];
  
  const backTracker = (args, tempArr) => {
      if (tempArr.length === strToArr.length) {
          results.push([...tempArr].join(''));
      }
      
      args.forEach(arg => {
          if (!tempArr.includes(arg)) {
              tempArr.push(arg);
              backTracker(args, tempArr);
              tempArr.pop();
          }
      });
  }
  
  backTracker(strToArr, []);
  console.log(results);
  return results;
}
// gfgPermutation('abc');

const permutateWithSpecificCount = (arrOfArgs, numberToPick) => {
  const results = [];

  const backTracker = (args, tempArr) => {
    if (tempArr.length === numberToPick) {
      results.push([...tempArr]);
    }

    args.forEach(arg => {
      if (!tempArr.includes(arg)) {
        tempArr.push(arg);
        backTracker(args, tempArr);
        tempArr.pop();
      }
    });
  }
  backTracker(arrOfArgs, []);
  console.log(results);
  return results;
}

const permutationAllowDuplicate = (argsPool, numberToPick) => {
  const results = [];
  
  const aux = (args, tempArr) => {
    // 뽑으려는 갯수 충족 시 results 에 넣어줌
    if (tempArr.length === numberToPick) {
      const resultFromIndex = tempArr.reduce((accm, curr) => argsPool[accm] + argsPool[curr]);
      results.push(resultFromIndex);
    }
    // arg 그 자체로 기존에 뽑았던 걸 판별하는게 아니라, index 기준으로 뽑아주어야 한다
    // 왜냐면 그래야 다른 index 지만 같은 element들의 경우를 피할 수 있기 때문이다
    args.forEach((arg, idx) => {
      // 해당 index 의 element 를 뽑은 적이 없다면
      if (!tempArr.includes(idx)) {
        tempArr.push(idx);
        aux(args, tempArr);
        tempArr.pop();
      }
    });

    aux(argsPool, []);
    console.log(results);
    return results;
  }
}

const permutationAllowDuplicate2 = (arrOfArgs, numberToPick) => {
  const results = [];

  const backTracker = (args, tempArr) => {
    if (tempArr.length === numberToPick) {
      const resultFromIndex = tempArr.map(eachIdx => args[eachIdx]).join('');
      if (!results.includes(resultFromIndex)) {
        results.push(resultFromIndex);
      }
    }

    args.forEach((arg, idx) => {
      if (!tempArr.includes(idx)) {
        tempArr.push(idx);
        backTracker(args, tempArr);
        tempArr.pop();
      }
    });
  }
  backTracker(arrOfArgs, []);
  return results;
}

// permutateWithSpecificCount([1, 2, 3, 3, 3], 3);
// permutationAllowDuplicate([1, 2, 3, 3, 3], 3);
permutationAllowDuplicate2([1, 2, 3, 3, 3], 3);
