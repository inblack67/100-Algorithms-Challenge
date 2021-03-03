function newNumeralSystem2 (number: string): string[] {
    const dict = {};
    let j = 0;
    for (let i = 65; i < 91; i++) {
        const char = String.fromCharCode(i);
        dict[ char ] = j;
        j++;
    }

    const str = number;
    const neededSum = dict[ str ];
    const res: string[] = [];

    for (const key in dict) {
        if (Object.prototype.hasOwnProperty.call(dict, key)) {
            const el = dict[ key ];
            for (const key2 in dict) {
                if (Object.prototype.hasOwnProperty.call(dict, key2)) {
                    const el2 = dict[ key2 ];
                    const sum = el + el2;
                    if (sum === neededSum) {
                        const myStr = `${ key }+${ key2 }`;
                        const revStr = myStr.split('').reverse().join('');
                        if (!res.includes(myStr) && !res.includes(revStr)) {
                            res.push(myStr);
                        }
                    }
                }
            }
        }
    }

    return res;
}
function newNumeralSystem (number: string): string[] {
    const res: string[] = [];
    let start = 65;
    let end = number.charCodeAt(0);

    while (start <= end) {
        const str = `${ String.fromCharCode(start) }+${ String.fromCharCode(end) }`;
        res.push(str);
        start++;
        end--;
    }
    return res;
}

console.log(newNumeralSystem2('G'));
console.log(newNumeralSystem('G'));