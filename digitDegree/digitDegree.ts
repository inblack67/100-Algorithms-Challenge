const getDigits = (num: number) => num.toString().length;

function digitDegree (n: number): number {
    const str = n.toString();
    const strLen = getDigits(n);
    let sum = 0;
    let count = 0;

    if (strLen <= 1) {
        return 0;
    }

    const strArr = str.split('');
    console.log(strArr);

    strArr.forEach(el => {
        sum += +el;
    });

    if (getDigits(sum) === 1) {
        count = 1;
        return count;
    }

    while (getDigits(sum) > 1) {
        const sumArr = sum.toString().split('');
        console.log(sumArr);
        sum = 0;
        sumArr.forEach(el => {
            sum += +el;
            count++;
        });
    }

    return count;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));