function compareIntegers (a: string, b: string): string {
    const num1 = +a;
    const num2 = +b;
    return num1 > num2 ? 'greater' : (num1 === num2 ? 'equal' : 'less');
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));