function encloseInBrackets (inputString: string): string {
    const strArr = inputString.split('');
    strArr.unshift('(');
    strArr.push(')');
    return strArr.join('');
}

function encloseInBrackets2 (inputString: string): string {
    return `(${ inputString })`;
}

console.log(encloseInBrackets('abacaba'));
console.log(encloseInBrackets2('abacaba'));