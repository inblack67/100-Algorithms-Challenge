function characterParity (symbol: string): string {
    const parsedSymbol = +symbol;

    return isNaN(parsedSymbol) ? 'not a digit' : (parsedSymbol % 2 === 0 ? 'even' : 'odd');

    // somewhat costly
    // if (isNaN(parsedSymbol)) {
    //     return 'not a digit';
    // } else if (parsedSymbol % 2 === 0) {
    //     return 'even';
    // } else {
    //     return 'odd';
    // }
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
