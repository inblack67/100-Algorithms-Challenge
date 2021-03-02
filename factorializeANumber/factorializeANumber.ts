function factorializeANumber (num: number): number {
    if (num <= 1) {
        return num;
    }
    return num * factorializeANumber(num - 1);
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));