const sumProducts = (arr: number[], isOdd: boolean): number[] => {
    const res = [];
    for (let i = 0; i < arr.length; i += 2) {
        const el = arr[ i ];
        const nextEl = arr[ i + 1 ];
        if (isOdd) {
            const prod = el * nextEl;
            res.push(prod);
        } else {
            const sum = el + nextEl;
            res.push(sum);
        }
    }
    return res;
};

const arrayConversion = (inputArray: number[]): number => {
    let isOdd = false;
    let copiedArr = [ ...inputArray ];
    while (copiedArr.length !== 1) {
        copiedArr = sumProducts(copiedArr, isOdd);
        isOdd = !isOdd;
    }
    return copiedArr[ 0 ];
};


const arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
console.log(arrayConversion(arr));