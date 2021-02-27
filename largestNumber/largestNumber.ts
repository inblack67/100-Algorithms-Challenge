const largestNumber2 = (n: number): number => {
    let res = '';
    for (let i = 0; i < n; i++) {
        res += 9;
    }
    return +res;
};
const largestNumber = (n: number): number => {
    const str = '9'.repeat(n);
    return +str;
};

console.log(largestNumber(9));