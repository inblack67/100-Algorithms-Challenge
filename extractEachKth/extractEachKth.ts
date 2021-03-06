function extractEachKth (inputArray: number[], k: number): number[] {
    const copy = [ ...inputArray ];
    const res: number[] = [];
    let count = 0;

    for (let i = 0; i < copy.length; i++) {
        const el = copy[ i ];
        if (count !== k - 1) {
            count++;
            res.push(el);
        } else {
            count = 0;
        }
    }

    return res;
}

const extractEachKth2 = (inputArray: number[], k: number): number[] => inputArray.filter((_, i) => (i + 1) % k !== 0);


console.log(extractEachKth([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 3));
console.log(extractEachKth2([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 3));