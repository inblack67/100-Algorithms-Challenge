function factorializeANumber (num: number): number {
    if (num <= 1) {
        return num;
    }
    return num * factorializeANumber(num - 1);
}
function factorializeANumber2 (num: number): number {
    if (num <= 1) {
        return num;
    }

    let res = 1;

    for (let i = 2; i <= num; i++) {
        res *= i;
    }
    return res;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
console.log(factorializeANumber2(5));
console.log(factorializeANumber2(10));