function findClosestPair (numbers: number[], sum: number): number {
    const distances: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        const el = numbers[ i ];
        for (let j = 0; j < numbers.length; j++) {
            const el2 = numbers[ j ];
            const mySum = el + el2;
            if (mySum === sum) {
                const myDiff = Math.abs(i - j);
                distances.push(myDiff);
            }
        }
    }
    return distances.length > 0 ? Math.min(...distances) : -1;
}

console.log(findClosestPair([ 1, 0, 2, 4, 3, 0 ], 5));
console.log(findClosestPair([ 2, 3, 7 ], 8));