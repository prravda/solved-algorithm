export const RomanNumberTable = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const romanToInt = (s: string): number => {
  const splitedString = [...s];
  let accumulatedValue = 0;

  for (let i = 0; i < splitedString.length; i++) {
    if (
      RomanNumberTable[splitedString[i]] <
      RomanNumberTable[splitedString[i + 1]]
    ) {
      accumulatedValue = accumulatedValue - RomanNumberTable[splitedString[i]];
      continue;
    }
    accumulatedValue = accumulatedValue + RomanNumberTable[splitedString[i]];
  }

  return accumulatedValue;
};

describe('Test: roman to int', () => {
  it('III should return 3', () => {
    expect(romanToInt('III')).toBe(3);
  });

  it('IV should return 4', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  it('IX should return 9', () => {
    expect(romanToInt('IX')).toBe(9);
  });

  it('LVIII should return 58', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });

  it('MCMXCIV should return 1994', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
