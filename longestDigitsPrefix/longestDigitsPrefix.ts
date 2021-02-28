const isAlpha = (ch: string) => ch.match(/[a-z]/gi);

const longestDigitsPrefix2 = (inputString: string): string => {
    const strArr = inputString.split('');
    const res = [];
    for (let i = 0; i < strArr.length; i++) {
        const el = strArr[ i ];
        if (!isAlpha(el)) {
            res.push(el);
        } else {
            break;
        }
    }
    return res.join('');
};

const longestDigitsPrefix = (inputString: string): string => {
    const strArr = inputString.split('');
    let res = '';
    for (let i = 0; i < strArr.length; i++) {
        const el = strArr[ i ];
        if (isNaN(+el)) {
            break;
        } else {
            res += el;
        }
    }
    return res;
};


console.log(longestDigitsPrefix('123aa1'));