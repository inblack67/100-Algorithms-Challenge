function chunkyMonkey (arr: any[], size: number): any[][] {
    const part1 = arr.slice(0, size);   // second arg of slice is exlusive
    const part2 = arr.slice(size);
    const res: any[][] = [];
    res.push(part1);
    res.push(part2);
    return res;
}

console.log(chunkyMonkey([ "a", "b", "c", "d" ], 2));
console.log(chunkyMonkey([ 0, 1, 2, 3, 4, 5 ], 4));