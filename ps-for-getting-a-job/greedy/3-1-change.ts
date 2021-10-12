const solution = (totalChange: number): number => {
  const coinList: number[] = [500, 100, 50, 10];

  let changeTillCurrent = totalChange;
  let numberOfCoin = 0;

  coinList.map((coin) => {
    const numberOfCurrentCoin = Math.floor(changeTillCurrent / coin);
    numberOfCoin = numberOfCoin + numberOfCurrentCoin;
    changeTillCurrent = changeTillCurrent - coin * numberOfCurrentCoin;
  });
  return numberOfCoin;
};

console.log(solution(1260));
