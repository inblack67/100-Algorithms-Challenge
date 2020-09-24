function alphabeticShift(inputString: string): string {
    const strArr: string[] = inputString.split('');
    const res: string = strArr.map((char, i) => {
        const w = inputString.charCodeAt(i) === 122 ? 97 : inputString.charCodeAt(i) + 1;
        const newW = String.fromCharCode(w);
        return newW;
    }).join('');
    return res;
}

console.log(alphabeticShift('abcd'));