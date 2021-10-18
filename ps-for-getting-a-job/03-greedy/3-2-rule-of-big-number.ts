const solution = (array: number[], m: number, k: number): number => {
  // declare counter variables
  let countForTotalSum = m;
  let accumulatedValue = 0;

  // sort array and set variable - biggest, next biggest
  const [first, second] = [...array].sort((a, b) => b - a).slice(0, 2);

  // calculation
  while (countForTotalSum > 0) {
    for (let i = 0; i < k; i++) {
      accumulatedValue += first;
      countForTotalSum--;
    }
    accumulatedValue += second;
    countForTotalSum--;
  }

  // return value
  return accumulatedValue;
};

console.log(solution([2, 4, 5, 4, 6], 8, 3));
