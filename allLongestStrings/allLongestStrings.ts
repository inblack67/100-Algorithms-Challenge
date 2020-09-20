function allLongestStrings(inputArray: string[]): string[] {
    let maxLength = Number.MIN_SAFE_INTEGER;
    inputArray.forEach(el => {
        const elLength = el.length;
        if (elLength > maxLength) {
            maxLength = elLength;
        }
    })
    const result = inputArray.filter(el => el.length === maxLength);
    return result;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));