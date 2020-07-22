const addDigits = num => {
    const digitsArr = num.toString().split('');
    const res = digitsArr.reduce((prev, current) => {
        prev += +current;
        return prev;
    }, 0)

    return res;
}

console.log(addDigits(566));