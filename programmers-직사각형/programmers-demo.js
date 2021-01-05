const solution = (v) => {
    let xPoints = [];
    let yPoints = [];
    
    let uniqueX = [];
    let uniqueY = [];

    for (const eachPoint of v) {
        xPoints.push(eachPoint[0]);
        yPoints.push(eachPoint[1]);
    }

    let currentXIndex = 0;
    for (const eachX of xPoints) {
        if (xPoints.indexOf(eachX) !== currentXIndex) {
            uniqueX = xPoints.filter(arg => arg !== eachX);
            break;
        }
        currentXIndex ++;
    }
    let currentYIndex = 0;
    for (const eachY of yPoints) {
        if (yPoints.indexOf(eachY) !== currentYIndex) {
            uniqueY = yPoints.filter(arg => arg !== eachY);
            break;
        }
        currentYIndex ++;
    }

    console.log([...uniqueX, ...uniqueY]);
    return [...uniqueX, ...uniqueY];
};

solution([[1, 4], [3, 4], [3, 10]]);
solution([[1, 1], [2, 2], [1, 2]]);