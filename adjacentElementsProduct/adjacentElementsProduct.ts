function adjacentElementsProduct(inputArray: number[]): number {
    let max: number = Number.MIN_SAFE_INTEGER;
    let result: number = 0;
    inputArray.forEach((num, i) => {
        const product = num * inputArray[i + 1];
        if (product > max) {
            max = product;
        }
        result = max;
    })
    return result;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));