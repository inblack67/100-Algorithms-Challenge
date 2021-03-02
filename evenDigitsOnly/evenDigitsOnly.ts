const isEven = (num: number) => num % 2 === 0;

function evenDigitsOnly (n: number): boolean {
    const strArr = n.toString().split('');
    const res = strArr.every(el => isEven(+el));
    return res;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));