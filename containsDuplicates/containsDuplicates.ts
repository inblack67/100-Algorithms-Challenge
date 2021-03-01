function containsDuplicates2 (a: number[]): boolean {
    const copy = [ ...a ];
    const arr = copy.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        const el = arr[ i ];
        const nextEl = arr[ i + 1 ];
        if (el === nextEl) {
            return true;
        }
    }
    return false;
}
function containsDuplicates (a: number[]): boolean {
    const copy = [ ...a ];
    const obj = {};
    copy.forEach((el) => {
        if (obj[ el ]) {
            obj[ el ]++;
        } else {
            obj[ el ] = 1;
        }
    });
    for (const i in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
            const el = obj[ i ];
            if (el > 1) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicates([ 1, 2, 3, 1 ]));
console.log(containsDuplicates([ 3, 1 ]));
