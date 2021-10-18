class InvalidInputStringLength extends Error {
  constructor(message: string) {
    super(message);
  }
}

const alphabetTable = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const availableCasesOfKnight = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

const solution = (locationAsString: string): number => {
  try {
    // error handling for invalid length of the input
    if (locationAsString.length !== 2) {
      throw new InvalidInputStringLength(
        '입력값이 올바르지 않습니다. 확인해주세요.'
      );
    }

    // set variable
    const [columnAsAlphabet, rowStartFromOne] = locationAsString.split('');
    const column = alphabetTable.indexOf(columnAsAlphabet);
    const row = Number(rowStartFromOne) - 1;

    // set counter variable
    let numberOfValidScenario = 0;

    // calculation
    availableCasesOfKnight.forEach((eachCase) => {
      const [columnMoveScenario, rowMoveScenario] = eachCase;
      // after moved, column and row are larger than or same with 0
      if (column - columnMoveScenario >= 0 && row - rowMoveScenario >= 0) {
        numberOfValidScenario++;
      }
    });

    // return result
    return numberOfValidScenario;
  } catch (e) {
    throw e;
  }
};

// testing
console.log(`case 1: ${solution('a1') === 2}`);
console.log(`case 2: ${solution('c2') === 6}`);
