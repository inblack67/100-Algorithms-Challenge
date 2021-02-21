const arrayMaximalAdjacentDifference = (inputArray: number[]): number => {
    let res = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < inputArray.length; i++) {
        const pureDiff = inputArray[ i ] - inputArray[ i - 1 ];
        const absDiff = Math.abs(pureDiff);
        if (absDiff > res) {
            res = absDiff;
        }
    }
    return res;
};

const arr = [ 2, 4, 1, 0 ];
console.log(arrayMaximalAdjacentDifference(arr));