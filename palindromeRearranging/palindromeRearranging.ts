const isPallindrome = (str: string): boolean => {
    const pureStr = str.trim().toLowerCase();
    const pureStrArr = pureStr.split('');
    const res = pureStrArr.join('');
    const rev = [ ...pureStrArr ].reverse().join('');
    return rev === res;
};

const palindromeRearranging = (inputString: string): boolean => {
    const str = inputString.trim().toLowerCase();
    const strArr = str.split('');
    const obj = {};
    let oddCount = 0;

    for (let i = 0; i < strArr.length; i++) {
        const el = strArr[ i ];
        if (obj.hasOwnProperty(el)) {
            obj[ el ]++;
        }
        else {
            obj[ el ] = 1;
        }
    }

    for (const i in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
            const el = obj[ i ];
            if (el % 2 !== 0) {
                oddCount++;
            }
        }
    }

    // only one odd count is allowed
    return oddCount > 1 ? false : true;
};

const str = 'aaabb';
console.log(palindromeRearranging(str));