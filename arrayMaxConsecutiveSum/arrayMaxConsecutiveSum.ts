function arrayMaxConsecutiveSum (inputArray: number[], k: number): number {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < k; i++) {
        const el = inputArray[ i ];
        sum += el;
    }

    max = sum;

    for (let i = k; i < inputArray.length; i++) {
        const el = inputArray[ i ];
        sum -= inputArray[ i - k ];
        sum += el;
        if (sum > max) {
            max = sum;
        }
    }

    return max;
}

console.log(arrayMaxConsecutiveSum([ 2, 7, 2, 5, 1, 6, 4 ], 2));