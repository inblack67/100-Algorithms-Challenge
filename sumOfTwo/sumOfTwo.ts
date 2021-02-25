const sumOfTwo = (a: number[], b: number[], v: number): boolean => {

    const hash = {};

    for (const el of a) {
        const diff = v - el;
        hash[ diff ] = diff;
    }

    for (const el2 of b) {
        if (hash.hasOwnProperty(el2)) {
            return true;
        }
    }

    // O(n^2)
    // for (let i = 0; i < a.length; i++) {
    //     const el = a[ i ];
    //     for (let j = 0; j < b.length; j++) {
    //         const el2 = b[ j ];
    //         const sum = el + el2;
    //         if (sum === v) {
    //             return true;
    //         }
    //     }
    // }

    // return false;
};

console.log(sumOfTwo([ 1, 2, 3 ], [ 10, 20, 30, 40 ], 42));