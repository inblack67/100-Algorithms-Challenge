const makePairs = (el1: string, el2: string): string[][] => {
    const res: string[][] = [];
    const pair = [ el1, el2 ].sort();
    res.push(pair);
    return res;
};

const checkPairs = (arr: string[][], el1: string, el2: string): boolean => {
    for (let i = 0; i < arr.length; i++) {
        const el = arr[ i ];
        if (el.includes(el1) && el.includes(el2)) {
            return true;
        }
    }
    return false;
};

const pairs = makePairs('Z', 'A');
console.log(pairs);
console.log(checkPairs(pairs, 'Z', 'Z'));

function newNumeralSystem (number: string): string[] {
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

console.log(newNumeralSystem('G'));