const isLucky = (n: number): boolean => {
    const str = n.toString();
    const strLength = str.length;
    const part1 = str.slice(0, strLength / 2);
    const part2 = str.slice(strLength / 2, strLength);
    const part1Arr = part1.split('');
    const part2Arr = part2.split('');
    let sum1 = 0;
    let sum2 = 0;
    part1Arr.forEach((el) => {
        sum1 += +el;
    });
    part2Arr.forEach(el => {
        sum2 += +el;
    });
    return sum1 === sum2;
};

console.log(isLucky(1230));
console.log(isLucky(239017));