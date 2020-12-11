const knightOfKingdom = (current) => {

  const alphabetPool = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
  ];

  let [col, row] = current.split('');
  col = alphabetPool.indexOf(col) + 1;
  row = Number(row);

  const wholeCase = [
    [2, 1], [2, -1],
    [-2, 1], [-2, 1],
    [1, 2], [1, -2],
    [-1, 2], [-1, -2]
  ];

  const availableCaseResult = wholeCase.map(arg => {
      if (
        ((arg[0] + col) > 0 && (arg[0] + col) < 9) && 
        ((arg[1] + row) > 0 && (arg[1] + row) < 9)
      ) {
        return [arg[0]+col, arg[1]+row];
      }
  }).filter(arg => arg !== undefined);

  return availableCaseResult.length;
};

console.log(knightOfKingdom('a1'));