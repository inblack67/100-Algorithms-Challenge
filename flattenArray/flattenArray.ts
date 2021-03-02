const res = [];
function flattenArray (arr: any[]): any[] {
    for (let i = 0; i < arr.length; i++) {
        const el = arr[ i ];
        if (Array.isArray(el)) {
            flattenArray(el);
        } else {
            res.push(el);
        }
    }
    return res;
}

console.log(flattenArray([ [ [ "a" ] ], [ [ "b" ] ] ]));
console.log(flattenArray([ 1, [ 2 ], [ 3, [ [ 4 ] ] ] ]));
