const solution = (brown, yellow) => {
    const sumOfWidthAndHeight = (brown + 4) / 2;
    for (let i = 1; i <= sumOfWidthAndHeight; i++) {
        const height = i;
        const width = sumOfWidthAndHeight - height;
        if (width >= height && (width - 2) * (height - 2) === yellow) {
            return [width, height];
        }
    }
}