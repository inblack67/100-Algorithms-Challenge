function firstNotRepeatingCharacter2 (s: string): string {
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        const el = s[ i ];
        if (obj[ el ]) {
            obj[ el ]++;
        } else {
            obj[ el ] = 1;
        }
    }
    for (const i in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
            const el = obj[ i ];
            if (el === 1) {
                return i;
            }
        }
    }

    return '_';
}
function firstNotRepeatingCharacter (s: string): string {
    for (let i = 0; i < s.length; i++) {
        const el = s[ i ];
        if (s.indexOf(el) === s.lastIndexOf(el)) {
            return el;
        }
    }
    return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
