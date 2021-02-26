const getSumOfSquares = (num: number) => {
    let sum = 0;
    const strArr = num.toString().split('');
    strArr.forEach(el => {
        sum += +el * +el;
    });
    return sum;
};

const squareDigitsSequence = (a0: number): number => {
    let count = 1;
    let sum = 0;
    const res: number[] = [ a0 ];

    let temp = a0;

    do {
        sum = getSumOfSquares(temp);
        if (res.includes(sum)) {
            count++;
            break;
        }
        res.push(sum);
        temp = sum;
        count++;
    } while (true);

    return count;
};


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));