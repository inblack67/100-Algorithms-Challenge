function largestOfFour (nums: number[][]): number[] {
    const res: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const el = nums[ i ];
        const largest = Math.max(...el);
        res.push(largest);
    }
    return res;
}

console.log(largestOfFour([ [ 4, 5, 1, 3 ], [ 13, 27, 18, 26 ], [ 32, 35, 37, 39 ], [ 1000, 1001, 857, 1 ] ]));
console.log(largestOfFour([ [ 4, 9, 1, 3 ], [ 13, 35, 18, 26 ], [ 32, 35, 97, 39 ], [ 1000000, 1001, 857, 1 ] ]));