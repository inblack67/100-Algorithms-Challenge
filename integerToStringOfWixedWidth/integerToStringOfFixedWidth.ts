function integerToStringOfFixedWidth (number: number, width: number): string {
    console.log(number);
    console.log(width);

    const str = number.toString();

    if (str.length === width) {
        return str;
    }

    if (str.length < width) {
        const diff = width - str.length;
        const strArr = str.split('');
        console.log(diff);
        for (let i = 0; i < diff; i++) {
            strArr.unshift('0');
        }
        return strArr.join('');
    }

    const res = str.slice(-width);

    return res;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
