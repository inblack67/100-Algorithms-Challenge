function houseNumbersSum (inputArray: number[]): number {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        const el = inputArray[ i ];
        if (el === 0) {
            return sum;
        }
        sum += el;
    }
}

console.log(houseNumbersSum([ 5, 1, 2, 3, 0, 1, 5, 0, 2 ]));