const isNumeric = (char: string) => char.match(/[0-9]/gi);

function firstDigit (inputString: string): string {
    const nums = isNumeric(inputString);
    return nums[ 0 ];
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
