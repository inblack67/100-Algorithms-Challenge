const missingLetters = (str: string): string => {
    const dictionary = {};
    for (let i = 97; i <= 122; i++) {
        const char = String.fromCharCode(i);
        dictionary[ char ] = i;
    }
    const pureStr = str.trim().toLowerCase();
    const strArr = pureStr.split('').sort();
    let res: string | undefined;
    strArr.forEach((el, i) => {
        const nextEl = strArr[ i + 1 ];
        if (nextEl) {
            if (dictionary[ nextEl ] - dictionary[ el ] > 1) {
                const code = dictionary[ el ];
                const char = String.fromCharCode(code + 1);
                res = char;
            }
        }
    });
    return res;
};
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));