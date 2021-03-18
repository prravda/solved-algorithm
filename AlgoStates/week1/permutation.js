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
  return results;
}

// /permutateWithSpecificCount([1, 2, 3, 4, 5], 3);

