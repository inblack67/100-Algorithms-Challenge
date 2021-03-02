function firstDuplicate (a: number[]): number {
    const obj = {};
    for (let i = 0; i < a.length; i++) {
        const el = a[ i ];
        if (obj[ el ]) {
            return el;  // second occurence
        }
        obj[ el ] = el; // first occurence
    }
    return -1;
}

console.log(firstDuplicate([ 2, 1, 3, 5, 3, 2 ]));
console.log(firstDuplicate([ 2, 4, 3, 5, 1 ]));
