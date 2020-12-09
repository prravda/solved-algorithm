const solution = (d, budget) => {
    let availableDivision = 0;
    let availableBudget = budget;
    for (const division of d.sort((a, b) => a - b)) {
        if (availableBudget - division >= 0) {
            availableBudget = availableBudget - division;
            availableDivision ++;
            continue;
        }
        break;
    }
    return availableDivision;
};

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
