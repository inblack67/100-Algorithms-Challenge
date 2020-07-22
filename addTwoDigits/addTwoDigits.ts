function addTwoDigits(n: number): number {
    return n.toString().split('').reduce((prev, curr) => +prev + +curr, 0);
}

console.log(addTwoDigits(29023));