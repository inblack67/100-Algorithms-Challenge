function integerToStringOfFixedWidth2 (number: number, width: number): string {
    const str = number.toString();

    if (str.length === width) {
        return str;
    }

    if (str.length < width) {
        const diff = width - str.length;
        const strArr = str.split('');
        for (let i = 0; i < diff; i++) {
            strArr.unshift('0');
        }
        return strArr.join('');
    }

    const res = str.slice(-width);

    return res;
}
function integerToStringOfFixedWidth (number: number, width: number): string {
    const str = number.toString();

    if (str.length === width) {
        return str;
    }

    if (str.length < width) {
        const diff = width - str.length;
        let padding = '';
        for (let i = 0; i < diff; i++) {
            padding += '0';
        }
        padding += str;
        return padding;
    }

    const res = str.slice(-width);

    return res;
}


console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
