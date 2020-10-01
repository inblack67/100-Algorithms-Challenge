function alphabetSubsequence(s: string): boolean {
    const strArray = s.split('');
    let chances = 0;
    const codes = [];

    // no duplicates
    strArray.forEach((char, i, arr) => {
        const currentCode = s.charCodeAt(i);
        codes.push(currentCode);
    })

    const codeSet = new Set(codes);

    if (codeSet.size !== strArray.length) {
        chances++;
    }

    // general check
    for (let i = 0; i < strArray.length - 1; i++) {
        const currentCode = s.charCodeAt(i);
        const nextCode = s.charCodeAt(i + 1);
        if (currentCode >= nextCode) {
            chances++;
        }
    }
    return chances === 0;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
