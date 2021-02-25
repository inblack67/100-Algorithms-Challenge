const productOfDigits = (num: number) => {
    const numArr = num.toString().split('');
    let product = 1;
    numArr.forEach(el => {
        product *= +el;
    });
    return product;
};

const uniqueDigitProducts = (arr: number[]): number => {
    const resSet = new Set();
    arr.forEach(el => {
        const digitsProd = productOfDigits(el);
        resSet.add(digitsProd);
    });
    return resSet.size;
};

const arr = [ 2, 8, 121, 42, 222, 23 ];
console.log(uniqueDigitProducts(arr));