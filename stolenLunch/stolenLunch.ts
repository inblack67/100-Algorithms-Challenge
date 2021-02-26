const stolenLunch = (note: string): string => {
    const alphaNumMap = {};
    const numAlphaMap = {};
    let j = 0;
    for (let i = 97; i < 123; i++) {
        const alpha = String.fromCharCode(i);
        alphaNumMap[ alpha ] = j;
        numAlphaMap[ j ] = alpha;
        j++;
    }

    const noteArr = note.toLowerCase().trim().split(':');
    const str1Arr = noteArr[ 0 ].trim().split('');
    const str2Arr = noteArr[ 1 ].trim().split('');

    const ok = str1Arr.join('').match(/[0-9]/gi);
    console.log(ok);

    str1Arr.forEach((el, i) => {
        if (!alphaNumMap[ el ]) {
            if (numAlphaMap[ el ]) {
                str1Arr[ i ] = numAlphaMap[ el ];
            }
        }
    });

    str2Arr.forEach((el, i) => {
        str2Arr[ i ] = alphaNumMap[ el ];
    });

    const str1 = str1Arr.join('');
    const str2 = str2Arr.join('');

    return `${ str1 }: ${ str2 }`;
};

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));