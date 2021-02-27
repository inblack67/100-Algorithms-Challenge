// more dynamic
const missingLetters2 = (str: string): string => {
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

// if its guranteed that letters will be in alphabetical order and only one will be missing
const missingLetters = (str: string): string | undefined => {
    const dict = 'abcdefghijklmnopqrstuvwxyz';
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        const el = strArr[ i ];
        if (el !== dict[ i ]) {
            return dict[ i ];
        }
    }
};

console.log(missingLetters("abce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));