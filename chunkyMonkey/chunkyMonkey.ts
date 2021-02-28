function chunkyMonkey (arr: any[], size: number): any[][] {
    const copiedArr = [ ...arr ];
    const res: any[][] = [];
    while (copiedArr.length > 0) {
        const elms = copiedArr.splice(0, size);
        res.push(elms);
    }
    return res;
}

console.log(chunkyMonkey([ "a", "b", "c", "d" ], 2));
console.log(chunkyMonkey([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], 4));