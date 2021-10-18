const solution = (matrix: number[][]): number => {
  return matrix.map((column) => column.sort()[0]).sort((a, b) => b - a)[0];
};
