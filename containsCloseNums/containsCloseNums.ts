const containsCloseNums = (nums: number[], k: number): boolean => {

    for (let i = 0; i < nums.length; i++) {
        const el = nums[ i ];
        for (let j = 0; j < nums.length; j++) {
            const el2 = nums[ j ];
            if ((i !== j) && (el === el2)) {
                const absSum = Math.abs(i - j);
                if (absSum <= k) {
                    return true;
                }
            }
        }
    }

    return false;
};

console.log(containsCloseNums([ 0, 1, 2, 3, 5, 2 ], 3));
console.log(containsCloseNums([ 0, 1, 2, 3, 5, 2 ], 2));