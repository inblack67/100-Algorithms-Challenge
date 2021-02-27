const seekAndDestroy = (arr1: number[], arr2: number[]): number[] => arr1.filter(el => !arr2.includes(el));

const seekAndDestroy2 = (arr1: number[], arr2: number[]): number[] => {
    const res = [];
    arr1.forEach((el) => {
        if (!arr2.includes(el)) {
            res.push(el);
        };
    });
    return res;
};

console.log(seekAndDestroy([ 3, 5, 1, 2, 2 ], [ 2, 3, 5 ]));
console.log(seekAndDestroy([ 1, 2, 3, 5, 1, 2, 3 ], [ 2, 3 ]));