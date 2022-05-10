// keypoint: remove the character with holding biggest character code
function solution(S) {
  const splittedCharacters = [...S];
  let wordPool = [];
  for (let i = 0; i < splittedCharacters.length; i++) {
    // handle the first loop
    if (i === 0) {
      const splittedArray = [...splittedCharacters].slice(i + 1);
      wordPool.push(splittedArray.join(''));
      continue;
    }
    const charactersBeforeCursor = [...splittedCharacters].slice(0, i);
    const characterAfterCursor = [...splittedCharacters].slice(i + 1);
    wordPool.push(
      charactersBeforeCursor.join('') + characterAfterCursor.join('')
    );
  }
  return [...wordPool].sort()[0];
}

console.log(solution('hot'));
