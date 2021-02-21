const arrayPreviousLessAll = (items: number[]): number[] => {

    const copiedItems = [ ...items ];

    for (let i = copiedItems.length - 1; i >= 0; i--) {
        const el = copiedItems[ i ];
        console.log(el);
        for (let j = i; j >= 0; j--) {
            const element = copiedItems[ j ];
            console.log(element);
            if (el > element) {
                copiedItems[ i ] = element;
                break;
            } else if (j === 0) { // none is smaller
                copiedItems[ i ] = -1;
            }
        }
    }

    return copiedItems;
};

// if only last el is concerned
const arrayPreviousLess = (items: number[]): number[] => {
    const res = items.map((el, i) => {
        if (i === 0) {
            return -1;
        }
        if (el > items[ i - 1 ]) {
            return items[ i - 1 ];
        }
        else {
            return -1;
        }
    });
    return res;
};

const arr = [ 3, 6, 2, 8, 4, 5, 7, 2 ];
console.log(arrayPreviousLessAll(arr));
console.log(arrayPreviousLess(arr));
console.log(arr);